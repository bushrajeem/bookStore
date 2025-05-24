import express from "express"
import {Db_Connection} from "./db-connection.js"
import {userModel} from "./model/user.model.js"
import dotenv from 'dotenv';


dotenv.config();

const port = 5000;
Db_Connection();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/my-site", async (req, res) => {
  
    await userModel.create(req.body);
 
    res.send({
      status: 200,
      message: "success",
    }); 
});

app.get("/my-site", async (req, res) => {
    await userModel.find(req.body);
    res.send({
      status: 200,
      message: "success",
    }); 
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
