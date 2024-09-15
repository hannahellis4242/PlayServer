import express, { json } from "express";
import { v4 } from "uuid";

const id = v4();
let counter = 0;
express()
  .use(json())
  .get("/", (_, res) => {
    res.send(`Server ${id} responding. Current count is ${counter++}`);
  })
  .listen(3000, "0.0.0.0", () => console.log(`server ${id} listening`));
