const router = require('express').Router()
const {Pug} = require('../db')
module.exports = router

// GET /api/pugs
router.get('/', async (req, res, next) => {
  try {
    const pugs = await Pug.findAll()
    res.json(pugs)
  } catch (err) {
    next(err)
  }
})

// POST /api/pugs
router.post('/', async (req, res, next) => {
  try {
    const newPug = await Pug.create(req.body)
    res.json(newPug)
  } catch (err) {
    next(err)
  }
})

// PUT /api/pugs/:pugId
router.put('/:pugId', async (req, res, next) => {
  try {
    const pug = await Pug.findById(req.params.pugId)
    const updatedPug = await pug.update(req.body)
    res.json(updatedPug)
  } catch (err) {
    next(err)
  }
})
