// const { MongoClient } = require("mongodb");

// // Replace the following with your Atlas connection string
// const url =
//   "mongodb+srv://anphan:Myungsoo1!@cluster0.je7wq.mongodb.net/Wefluens?retryWrites=true&w=majority";
// const client = new MongoClient(url);

// async function run() {
//   try {
//     await client.connect();
//     console.log("Connected correctly to server");
//   } catch (err) {
//     console.log(err.stack);
//   } finally {
//     await client.close();
//   }
// }

// run().catch(console.dir);

const MongoClient = require("mongodb").MongoClient;

const dbConnectionUrl =
  "mongodb+srv://anphan:Myungsoo1!@cluster0.je7wq.mongodb.net/Wefluens?retryWrites=true&w=majority";

function initialize(
  dbName,
  dbCollectionName,
  successCallback,
  failureCallback
) {
  MongoClient.connect(dbConnectionUrl, function (err, dbInstance) {
    if (err) {
      console.log(`[MongoDB connection] ERROR: ${err}`);
      failureCallback(err); // this should be "caught" by the calling function
    } else {
      const dbObject = dbInstance.db(dbName);
      const dbCollection = dbObject.collection(dbCollectionName);
      console.log("[MongoDB connection] SUCCESS");

      successCallback(dbCollection);
    }
  });
}

module.exports = {
  initialize,
};
