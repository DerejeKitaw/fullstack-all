const {db, Coffee, Pug} = require('./server/db')

const seed = async () => {
  try {
    await db.sync({force: true})
    console.log('database synced, ready for fun stuff')
    const coffee = await Coffee.create({name: 'puppaccino'})
    const cody = await Pug.create({name: 'Cody', favoriteCoffeeId: coffee.id})
    const doug = await Pug.create({name: 'Doug'})

    const pugs = await Pug.findAll({
      where: {
        favoriteCoffeeId: coffee.id
      },
      include: [{
        model: Coffee,
        as: 'favorite_coffee'
      }]
    })

    console.log(pugs.map(pug => pug.dataValues))

    // everything else
  } catch (err) {
    console.log('oh noes, disaster')
    console.log(err)
  } finally {
    console.log('closing the database connection')
    db.close()
  }
}

seed()
