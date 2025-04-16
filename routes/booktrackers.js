const express = require('express')
const router = express.Router()
const booktrackersController = require('../controllers/booktrackers')

router.get('/', booktrackersController.getBooktrackers)

router.post('/createBooktracker', booktrackersController.createBooktracker)

router.put('/markComplete', booktrackersController.markComplete)

router.put('/markIncomplete', booktrackersController.markIncomplete)

router.delete('/deleteBooktracker', booktrackersController.deleteBooktracker)

module.exports = router