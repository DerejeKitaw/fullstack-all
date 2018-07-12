const router = require('express').Router()
const {Party, Pug} = require('../db')
module.exports = router

// GET /api/parties
router.get('/', async (req, res, next) => {
  try {
    const parties = await Party.findAll({
      include: [{model: Pug, as: 'host'}]
    })
    res.json(parties)
  } catch (err) {
    next(err)
  }
})
