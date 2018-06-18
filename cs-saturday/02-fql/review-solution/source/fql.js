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
    const rowIds = this._plan.getInitialRowIds(this._table);
    for (const id of rowIds) {
      if (!this._plan.withinLimit(rows)) break;
      const row = this._table.read(id);
      if (this._plan.matchesRow(row)) {
        const joinedRows = this._plan.executeJoin(row);
        for (const row of joinedRows) {
          const selectedRow = this._plan.selectColumns(row);
          rows.push(selectedRow);
        };
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
  innerJoin (foreignFql, rowMatcher) {
    const copy = this.copy();
    copy._plan.addInnerJoin({foreignFql, rowMatcher});
    return copy;
  }
}

module.exports = FQL;
