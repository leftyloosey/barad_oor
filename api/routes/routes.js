const router = require('express').Router()
const { Strang } = require('../models/Strang')
console.log(Strang)

router.get('/hello', async (req, res) => {
  const data = await Strang.find({})
  res.send(JSON.stringify(data))
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
