const express = require('express');
const app = express()
import dbClient from './utils/db';
import redisClient from './utils/redis';
app.get('/status', () => {
	const redisValue = redisClient.isAlive();
	const dbValue = dbClient.isAlive();
	response.status(200).send({redis: redisValue, db: dbValue})
})
app.get('/stats', (request, response) => {
	const noOfUsers = dbClient.nbUsers();
	const noOfFiles = dbClient.nbFiles();
	response.status(200).send({users: noOfUsers, files: noOfFiles});
});
