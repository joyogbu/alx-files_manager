import { MongoClient } from 'mongodb';
//import os
let connected;
class DBClient {
  constructor() {
    connected = false;
    const host = process.env.DB_HOST || 'localhost'
    const port = process.env.DB_PORT || 27017
    const database = process.env.DB_DATABASE || 'file_manager'
    const uri = "mongodb://'+ host + ':' + port + '/' + database";
//class DBClient {
  //constructor() {
    this.client = new MongoClient(uri);
    this.client.connect()
  }

  isAlive() {
    return new Promise((resolve, reject) => {
      this.client.on('connect', (err) => {
        if (err) {
          reject(err);
	  return(false)
        }
	      console.log("Connected succesfully to mongo");
        resolve(true);
      });
      return resolve(true)
    })
  }

  /*isAlive() {
    this.client.on('connect', (err) => {
	    if (err) { throw Error}
      connected = true;
    })
    return (connected);
  }*/
  nbUsers() {
    const db = this.client.db()
	  const collection = db.collection('users');
	  collection.find({}).toArray((err, docs) => {
		  if(err) {
			  return err
		  }
		  return docs.length
	  });
  }
  nbFiles() {
    const db = this.client.db()
    const collection = db.collection('files');
    collection.find({}).toArray((err, docs) => {
      if(err){
	return err
      }
      return docs.length
    });
  }
}
const dbClient = new DBClient
module.exports = dbClient
