const fs = require('fs');
const path = require('path');

// const data = fs.readFileSync('../express-101.pdf');
// console.log('done with reading');

fs.readFile('../file.txt', (err, data) => {
  if (err) console.log(err);
  else {
    const name = data.toString().trim();
    fs.readFile(path.join(__dirname, '..', name), (err, data) => {
      if (err) console.log(err);
      else {
        console.log('node intro')
      }
    })
  }
})

console.log('Welcome 1806!');
