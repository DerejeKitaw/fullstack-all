const router = require('express').Router()
const {Op} = require('sequelize')
const {Pug, Party} = require('../db')
module.exports = router

// db.model('pug_party')

// GET /api/pugs
router.get('/', async (req, res, next) => {
  try {
    const pugs = await Pug.findAll({
      // where: {
      //   age: {
      //     [Op.gte]: req.query.minage
      //   }
      // },
      // include: [{model: Party}]
    })
    res.json(pugs)
  } catch (err) {
    next(err)
  }
})

// POST /api/pugs
router.post('/', async (req, res, next) => {
  try {
    const newPug = await Pug.create(req.body)
    res.status(201).json(newPug)
  } catch (err) {
    next(err)
  }
})

router.use('/:pugId', async (req, res, next) => {
  try {
    const pug = await Pug.findById(req.params.pugId)
    if (!pug) {
      const err = new Error('Pug not found!')
      err.status = 404
      return next(err)
    }
    req.pug = pug
    next()
  } catch (err) {
    next(err)
  }
})

// GET /api/pugs/:pugId
router.get('/:pugId', async (req, res, next) => {
  res.json(req.pug)
})

// PUT /api/pugs/:pugId
router.put('/:pugId', async (req, res, next) => {
  try {
    const updatedPug = await req.pug.update({
      age: req.body.age
    })
    res.json(updatedPug)
  } catch (err) {
    next(err)
  }
})

// DELETE /api/pugs/:pugId
router.delete('/:pugId', async (req, res, next) => {
  try {
    await req.pug.destroy()
    res.sendStatus(204)
  } catch (err) {
    next(err)
  }
})
