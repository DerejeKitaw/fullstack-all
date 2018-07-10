const db = require('./server/db')
const Pug = db.model('pugs')

const seed = async () => {
  await db.sync({force: true})
  await Promise.all([
    Pug.create({name: 'Cody', age: 8}),
    Pug.create({name: 'Doug', age: 7}),
    Pug.create({name: 'Penny', age: 3})
  ])
  console.log('Success!')
  db.close()
}

seed()
