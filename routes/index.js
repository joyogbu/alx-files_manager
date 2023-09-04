const express = require('express')
const router = express.Router()

router.get('/status', (request, response) => {
	AppController.getStatus
})
router.get('/stats', (request, response) => {
	AppController.getStats
})
module.exports = router
