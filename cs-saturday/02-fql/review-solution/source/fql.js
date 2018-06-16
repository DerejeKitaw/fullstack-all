const Plan = require('./plan');

class FQL {
  constructor (table, plan = new Plan()) {
    this._table = table;
    this._plan = plan;
  }
  copy () {
    const copiedPlan = this._plan.copy();
    const copiedQuery = new FQL(this._table, copiedPlan);
    return copiedQuery
  }
  get () {
    const rows = [];
    const rowIds = this._table.getRowIds();
    for (const id of rowIds) {
      if (!this._plan.withinLimit(rows)) break;
      const row = this._table.read(id);
      if (this._plan.matchesRow(row)) {
        const selectedRow = this._plan.selectColumns(row);
        rows.push(selectedRow);
      }
    }
    return rows;
  }
  count () {
    return this.get().length;
  }
  limit (amount) {
    const copy = this.copy();
    copy._plan.setLimit(amount);
    return copy;
  }
  select (...columns) {
    const copy = this.copy();
    copy._plan.setSelected(columns);
    return copy;
  }
  where (criteria) {
    const copy = this.copy();
    copy._plan.setCriteria(criteria);
    return copy;
  }
}

module.exports = FQL;
