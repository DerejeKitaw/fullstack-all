class Plan {
  copy () {
    const copiedPlan = new Plan();
    Object.assign(copiedPlan, this);
    return copiedPlan;
  }
  setLimit (amount) {
    this._limit = amount;
  }
  withinLimit (rows) {
    if (!this.hasOwnProperty('_limit')) return true;
    return rows.length < this._limit;
  }
  setSelected (columns) {
    if (columns.includes('*')) delete this._selectedColumns;
    else this._selectedColumns = columns;
  }
  selectColumns (row) {
    if (!this.hasOwnProperty('_selectedColumns')) return row;
    const selectedRow = {};
    for (const column of this._selectedColumns) {
      selectedRow[column] = row[column];
    }
    return selectedRow;
  }
  setCriteria (criteria) {
    this._criteria = criteria;
  }
  matchesRow (row) {
    if (!this.hasOwnProperty('_criteria')) return true;
    return Object.keys(this._criteria).every(column => {
      const cond = this._criteria[column];
      if (typeof cond === 'function') {
        return cond(row[column]);
      } else {
        return cond === row[column];
      }
    });
  }
}

module.exports = Plan;
