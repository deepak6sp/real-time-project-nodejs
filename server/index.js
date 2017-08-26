import express from 'express';
import homeRouter from "./home/index.js";

// initialise
const app = express();


//main
app.use('/', homeRouter);
app.listen(3000, () => {
  console.log("server running on port 3000");
});
