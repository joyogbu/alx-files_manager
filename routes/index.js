const express = require('express')
const router = express.Router()
const  AppController = require('../controllers/AppController.js')
//const { getStats } = require('../controllers/AppController.js')
//router.get('/status', (request, response) => {
router.get('/status', AppController.getStatus)
	//response.status(200).send(message)
	//response.send('my status route')
//})
router.get('/stats', AppController.getStats)
	//const message = AppController.getStats
	//response.status(200).send(message)
	//response.send('stats route');
//})
module.exports = router
