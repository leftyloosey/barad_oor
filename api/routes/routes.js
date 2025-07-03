const router = require('express').Router()
const { Strang } = require('../models/Strang')
console.log(Strang)

router.get('/hello', async (req, res) => {
  try {
    const newStrang = new Strang({
      content: 'sorcery',
    })
    await newStrang.save()
    const data = await Strang.find({})
    res.send(JSON.stringify(data))
    // res.status(200).send('yabluko')
  } catch (error) {
    res.status(400).json(err)
  }
})

router.post('/newstrang', async (req, res) => {
  try {
    const content = req.body.content
    const newStrang = new Strang({
      content,
    })
    await newStrang.save()

    res.status(200).json(newStrang)
  } catch (err) {
    console.log(err)
    res.status(400).json(err)
  }
})

module.exports = router
