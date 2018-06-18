const { readFile } = require('fs');
// const { promisify } = require('util');

// const promisyReadFile = promisify(require('fs').readFile);

// const filePromise = promisyReadFile('./movies/asyncawait.mov');

const promisyReadFile = file => {
  return new Promise((resolve, reject) => {
    readFile(file, (err, data) => {
      if (err) reject(err);
      else resolve(data)
    })
  })
}

const init = async () => {
  try {
    const file = promisyReadFile('./movies/asyncawait.mov');
    const contents = await file;
    console.log(contents);
  } catch (err) {
    console.log('OOPS, SOMETHING WENT WRONG');
    console.log(err.message);
  }
}

init();
