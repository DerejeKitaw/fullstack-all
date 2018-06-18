const { promisify } = require('util');
const asyncReadFile = promisify(require('fs').readFile)

const movies = ['asyncAwait', 'ORMs', 'pg'].map(m => `./movies/${m}.mov`);


const init = async () => {
  try {
    const orms = asyncReadFile(movies[1]);
    const asyncAwait = asyncReadFile(movies[0]);
    const pg = asyncReadFile(movies[2]);
    const movieValues = await Promise.all([orms, asyncAwait, pg])
    return movieValues;
  } catch (err) {
    console.log('something is wrong');
  }

}

const moviePromises = init();

module.exports = moviePromises;
