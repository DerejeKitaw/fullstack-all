class Plan {
  constructor () {
    this._innerJoins = [];
  }
  copy () {
    const copiedPlan = new Plan();
    Object.assign(copiedPlan, this);
    copiedPlan._innerJoins = this._innerJoins.slice();
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
  getInitialRowIds (table) {
    if (!this.hasOwnProperty('_criteria')) return table.getRowIds();
    // split criteria
    const indexedCriteria = {};
    const nonIndexedCriteria = {};
    for (const column in this._criteria) {
      if (table.hasIndexTable(column)) {
        indexedCriteria[column] = this._criteria[column];
      } else {
        nonIndexedCriteria[column] = this._criteria[column];
      }
    }
    if (Object.keys(indexedCriteria).length === 0) {
      return table.getRowIds();
    }
    this._criteria = nonIndexedCriteria;
    // find initial ids based off of index table and indexed criteria
    return Object.keys(indexedCriteria)
    .map(column => {
      const indexTable = table.getIndexTable(column);
      const indexKey = indexedCriteria[column]; // e.g. 1972
      return indexTable[indexKey];
    })
    .reduce((intersection, nextRowIds) => {
      return intersection.filter(id => nextRowIds.includes(id));
    });
  }
  static merge (rowA, rowB) {
    return Object.assign({}, rowA, rowB);
  }
  addInnerJoin (joinData) {
    this._innerJoins.push(joinData);
  }
  executeJoin (row) {
    if (this._innerJoins.length === 0) return [row];
    return this._innerJoins
    .reduce((all, {foreignFql, rowMatcher}) => {
      return foreignFql.get()
      .filter(foreignRow => rowMatcher(row, foreignRow))
      .map(foreignRow => Plan.merge(foreignRow, row))
      .concat(all);
    }, []);
  }
}

module.exports = Plan;
