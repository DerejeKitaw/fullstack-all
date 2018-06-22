const db = require('./db');
const Bun = db.model('bun');
const Shelter = db.model('shelter');

const shelters = [
  {
    name: 'Love Bunnies'
  },
  {
    name: 'Cuddle Buns'
  },
  {
    name: 'Carrots Shelter'
  }
]

const bunnies = [{
  name: 'Pearl',
  image: 'https://nycacc.shelterbuddy.com/storage/image/0a4b22fb0dd148b08c53b187a795fd90-1506887747-1506887783-jpg/',
  shelterId: 1
}, {
  name: 'Chanel',
  image: 'https://nycacc.shelterbuddy.com/storage/image/d03db1c60c66495d89530109eae92fb6-1527967830-1527967842-jpg/',
  shelterId: 1
}, {
  name: 'Mango',
  image: 'https://nycacc.shelterbuddy.com/storage/image/913ecea8d3624fd691d5bb2c0c636a82-1528722562-1528722562-jpg/',
  shelterId: 2
}, {
  name: 'Ruby',
  image: 'https://nycacc.shelterbuddy.com/storage/image/ba168bc359bb4ad380ae0d0d4a1b6317-1506866271-1506866271-jpg/',
  shelterId: 2
}, {
  name: 'Lily',
  image: 'https://nycacc.shelterbuddy.com/storage/image/14354d41b28949db8b7264c79359bb8d-1527467430-1527467448-jpeg/',
  shelterId: 3
}];

const seed = async () => {
  try {
    await db.sync({force: true})
    await Shelter.bulkCreate(shelters)
    await Bun.bulkCreate(bunnies);
    console.log('all done');
    await db.close();
  } catch (err) {
    console.log('something is wrong...', err.message);
  }
}

seed();
