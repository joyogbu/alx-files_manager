import { createClient } from 'redis';
//import util from 'util'
let client;
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
		//this.client.on('connect', () => {
		const connected = true;
		return(connected)
		//});
	}
	get (key) {
	  return new Promise((resolve, reject) => {
	     if (!this.client) reject(new Error('No redis instance found'));
	     this.client.get(key, (err, reply) => {
		     if (err) return reject(err)
		     if (reply == null){
			     return resolve(null);
		     }
		   
		resolve(reply)
	     })
	  })
	}
	/*async get(key) {
	    this.client.get(key, async (err, reply) => {
	      if(err) {
		return(err);
	      }
	      await (reply);
	  });
	}*/
	async set(key, value, time) {
		this.client.set(key, value, (err, reply) => {
		return reply;
		});
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
