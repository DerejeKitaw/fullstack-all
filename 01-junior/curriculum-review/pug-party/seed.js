const {db, Pug, Party} = require('./server/db')

const seed = async () => {
  await db.sync({force: true})

  const cody = await Pug.create({
    name: 'Cody',
    age: 8,
    biography: 'An esteemed coding pug',
    color: 'fawn'
  })

  const penny = await Pug.create({
    name: 'Penny',
    age: 7,
    biography: 'Another pug of high esteem',
    color: 'black'
  })

  const pugBeachParty = await Party.create({
    location: ['1', '2']
  })

  await Promise.all([
    pugBeachParty.setHost(penny),
    pugBeachParty.addPug(cody),
    pugBeachParty.addPug(penny)
  ])

  db.close()
  console.log('Success! Database is seeded!')
}

seed()
  .catch((err) => {
    console.log('Oh noes! Seeding disaster!')
    console.log(err)
  })
