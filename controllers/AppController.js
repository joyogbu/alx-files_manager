const express = require('express');
const app = express()
import dbClient from '../utils/db';
import redisClient from '../utils/redis';
//app.get('/status', (request, response) => {
exports.getStatus = function(request, response) {
	const redisValue = redisClient.isAlive();
	const dbValue = dbClient.isAlive();
	response.status(200).send({redis: redisValue, db: dbValue})
	//const message = "{redis: 'redisValue', db: 'dbValue'}"
	//response.send('message')
	}
	//app.p /get('/stats', (request, response) => {
exports.getStats = function(request, response) {
	const noOfUsers = dbClient.nbUsers();
	const noOfFiles = dbClient.nbFiles();
	response.status(200).send({users: noOfUsers, files: noOfFiles});
	//const value = "{users: 'noOfUsers', files: 'noOfFiles'}"
	//response.send('value')
}
