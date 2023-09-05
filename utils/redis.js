import { createClient } from 'redis';

let connected;
class RedisClient {
  constructor() {
    //connected = false;
    this.client = createClient();
    this.client.on('error', (err) => {
      connected = false
      console.log('Redis client not connected to the server', err);
    });
  }

  isAlive1() {
    return new Promise((resolve, reject) => {
      this.client.on('connect', (err) => {
        if (err) {
          reject(err);
        }
        resolve(true);
      });
      // return resolve(true)
    }).then((value) => value);
  }

  isAlive() {
    if (this.client) {
      connected = true;
    }
    return (connected);
  }

  get(key) {
    return new Promise((resolve, reject) => {
      if (!this.client) reject(new Error('No redis instance found'));
      this.client.get(key, (err, reply) => {
        if (err) return reject(err);
        if (reply == null) {
          return resolve(null);
        }
        return resolve(reply);
      });
    });
  }

  async set(key, value, time) {
    this.client.set(key, value, (err, reply) => reply);
    // .then(function(res) {
    this.client.expire(key, time);

    // return p
  }

  async del(key) {
    return this.client.del(key);
  }
}
const redisClient = new RedisClient();
module.exports = redisClient;
