const router = require('express').Router()
module.exports = router

router.use('/pugs', require('./pugs'))
router.use('/parties', require('./parties'))

// /api/cats
router.use((req, res, next) => {
  const err = new Error('Route began with /api, but no api routes exist for that')
  err.status = 404
  next(err)
})
