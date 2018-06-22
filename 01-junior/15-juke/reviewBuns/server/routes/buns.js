const Bun = require('../db').model('bun');
const router = require('express').Router();

router.get('/', async (req, res, next) => {
  try {
    const buns = await Bun.findAll()
    res.json(buns);

  } catch (err) {next(err)}
});

router.get('/:id', async (req, res, next) => {
  const bun = await Bun.findById(req.params.id).catch(next);
  res.json(bun);
})

router.post('/', async (req, res, next) => {
  const newBun = await Bun.create(req.body);
  res.json(newBun);
})

router.put('/:id', async (req, res, next) => {
  try {

    const [numAffected, [updatedBunny]] = await Bun.update({name: req.body.name}, {
      where: {
        id: req.params.id
      }
    })
    res.json(updatedBunny)
  } catch (err) { next(err) }
})

module.exports = router
