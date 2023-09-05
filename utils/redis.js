import { createClient } from 'redis';

// let connected;
class RedisClient {
  constructor() {
    this.connected = true;
    this.client = createClient();
    this.client.on('error', (err) => {
      this.connected = false;
      console.log('Redis client not connected to the server', err);
    });
  }

  isAlive() {
    /* if (this.client) {
      connected = true;
    } */
    return this.connected;
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
