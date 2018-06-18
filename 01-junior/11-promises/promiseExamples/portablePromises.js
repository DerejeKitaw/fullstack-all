const moviePromises = require('./parallelAndSequential');

const hello = async () => {
  const movies = await moviePromises;
  return movies;
}

hello();
