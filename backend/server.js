const express = require("express");
const app = express();
const cors = require("cors");
// const cookies = require("cookie-parser");

const body_parser = require("body-parser");
app.use(cors());
// app.use(cookieParser());

// parse JSON (application/json content-type)
app.use(body_parser.json());

const port = 27017;

// << db setup >>
const db = require("./db");
const dbName = "Wefluens";
const collectionName = "Employees";

// << db init >>

db.initialize(
  dbName,
  collectionName,
  function (dbCollection) {
    // successCallback
    // get all items
    dbCollection.find().toArray(function (err, result) {
      if (err) throw err;
      console.log(result);
    });

    // << db CRUD routes >>

    app.get("/employees/:id", (request, response) => {
      const employeeId = request.params.id;

      dbCollection.findOne({ id: employeeId }, (error, result) => {
        if (error) throw error;
        // return item
        response.json(result);
      });
    });
  },
  function (err) {
    // failureCallback
    throw err;
  }
);

app.get("/", (req, res) => {
  req.header("user-agent"); // "Mozilla/5.0 (Macintosh Intel Mac OS X 10_8_5) AppleWebKi..."
  console.log(req.header("user-agent"));
  console.dir(req.ip);
});

app.listen(port, () => {
  console.log(`Server listening at ${port}`);
});
