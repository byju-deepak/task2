const express = require("express");
const cors = require("cors")
const router = require("./route");
const db = require("./db");
const app = express();
app.use(express.json());
app.use(cors())

db.connect().then(()=>console.log("Connection Successfull")).catch((err)=>console.log(err));

app.use(router);

app.listen(8000, () => {
    console.log("Listening to port 8000");
});
