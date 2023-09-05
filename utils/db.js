import { MongoClient } from 'mongodb';
//import os
let connected;
class DBClient {
  constructor() {
    connected = false;
    const host = process.env.DB_HOST || 'localhost'
    const port = process.env.DB_PORT || 27017
    const database = process.env.DB_DATABASE || 'file_manager'
    const uri = 'mongodb://' + host + ':' + port;
//class DBClient {
  //constructor() {
    this.client = new MongoClient(uri, { useUnifiedTopology: true });
    this.client.connect((err, db) => {
	    if (err) {
		    console.log(err)
	    }
    })
      //.then(() => {
	      this.db = this.client.db(database)
      /*});
      .catch((err) => {
	      console.log(err.message);
      });*/
  }

  /*isAlive() {
	   return this.client.isConnected();
    return new Promise((resolve, reject) => {
      this.client.on('connect', (err) => {
        if (err) {
          reject(err);
	  return(false)
        }
	      console.log("Connected succesfully to mongo");
        return resolve(true);
      });
      resolve(true)
    })
  }*/

  isAlive() {
	  return this.client.isConnected();
    /*this.client.on('connect', (err) => {
	    if (err) { console.log(err)}
      connected = true;
    })
    return (connected);*/
    
  }
  async nbUsers() {
    //const db = this.client.db()
	  const collection = this.db.collection('users');
	  /*collection.find({}).toArray((err, docs) => {
		  if(err) {
			  return err
		  }
		  return docs.length
	  });*/
	  return collection.countDocuments()
  }
  async nbFiles() {
    //const db = this.client.db()
 	   const collection = this.db.collection('files');
    /*collection.find({}).toArray((err, docs) => {
      if(err){
	return err
      }
      return docs.length
    });*/
	  return collection.countDocuments()
  }
}
const dbClient = new DBClient
module.exports = dbClient
