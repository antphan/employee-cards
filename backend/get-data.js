const { MongoClient } = require("mongodb");
const express = require("express");

const url =
  "mongodb+srv://anphan:Myungsoo1!@cluster0.je7wq.mongodb.net/Wefluens?retryWrites=true&w=majority";
const client = new MongoClient(url);

const dbName = "Wefluens";

async function run() {
  try {
    await client.connect();
    console.log("Connected correctly to server");
    const db = client.db(dbName);

    const col = db.collection("User");

    let userDocument = {
      browser: req.header("user-agent"),
      ip: req.ip,
      content: req.header("content-type"),
    };

    // Insert a single document, wait for promise so we can read it back
    const p = await col.insertOne(userDocument);
    const myDoc = await col.find().toArray(function (err, result) {
      if (err) throw err;
      console.log(result);
    });
    // Print to the console
    console.log(myDoc);
  } catch (err) {
    console.log(err.stack);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
