const {db} = require('./db')
const app = require('./app')
const PORT = process.env.PORT || 8080

db.sync()
  .then(() => {
    console.log(`

  🐾 🐾 Pawesome! The database is synced!

`)

    app.listen(PORT, () => console.log(`
    
  Ready to party on port: ${PORT} 🎉 🎉
    
  `))
  })
