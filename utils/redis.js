import { createClient } from 'redis';

class RedisClient {
	constructor() {
		this.client = createClient();
		this.client.on('error', (err) => {
	console.log("Redis client not connected to the server", err)
		});
		//this.client.on('connect', isAlive);
		//await this.client.connect();
	}
	isAlive() {
		/*this.client.on('connect', () => {
			return true
		});*/
		return true;
	}
	async get(key) {
		return this.client.get(key);
	}
	async set(key, value, time) {
		this.client.set(key, value);
			//.then(function(res) {
		this.client.expire(key, time)
		
		//return p
	}
		async del(key) {
		return this.client.del(key);
	}
}
const redisClient = new RedisClient;
module.exports = redisClient;
