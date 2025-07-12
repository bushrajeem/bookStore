import dotenv from "dotenv";
import express from "express";
import { Db_Connection } from "./db-connection.js";
import { commentModel } from "./model/comment.model.js";
import cors from "cors";

dotenv.config();

const port = 5000;
Db_Connection();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors())


app.post("/comments", async (req, res) => {
  try {
    const response = await commentModel.create(req.body);

    res.status(200).send({
      status: 200,
      message: "success",
      data: response,
    });
  } catch (error) {
    res.status(500).send({
      status: 500,
      message: "failed",
      data: error.message,
    });
  }
});

app.get("/comments", async (req, res) => {
  try {
    const response = await commentModel.find();
    res.status(200).send({
      status: 200,
      message: "success",
      data: response,
    });
  } catch (error) {
    res.status(500).send({
      status: 500,
      message: "failed",
      data: error.message,
    });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
