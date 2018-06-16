const fs = require('fs');
const path = require('path');

class Table {
  constructor (folderPath) {
    this._folderPath = folderPath;
  }
  static toFilename (id) {
    return `${id}.json`;
  }
  static toId (filename) {
    return filename.slice(0, -5);
  }
  getRowIds () {
    const filenames = fs.readdirSync(this._folderPath);
    const ids = filenames.map(Table.toId);
    return ids;
  }
  read (id) {
    const filepath = path.join(this._folderPath, Table.toFilename(id));
    if (!fs.existsSync(filepath)) return undefined;
    const fileContents = fs.readFileSync(filepath); // '{"id": "0000", "name": "Aliens", "year": 1986, "rank": 8.2}'
    const row = JSON.parse(fileContents);
    return row;
  }
}

module.exports = Table;
