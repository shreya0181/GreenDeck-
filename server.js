const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const config = require("config");
const port = process.env.PORT || 5000;

app.use(cors()); //middleware
app.use(express.json());
// app.use(cookieParser());
//const uri = process.env.ATLAS_URI;
// const uri = config.get("ATLAS_URI");
// mongoose.connect(uri, {
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   useUnifiedTopology: true,
// });
// const connection = mongoose.connection;
// connection.once("open", () => {
//   console.log("mongo db connection established");
// });

const MongoClient = require("mongodb").MongoClient;
const uri =
  "mongodb+srv://Shreya:shreya@cluster0-cyb0i.gcp.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect((err) => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

const contentRouter = require("./routes/content.js");

app.use("/content", contentRouter); //.../event will going to load everything in eventRouter

app.listen(port, () => {
  console.log("listening");
});
