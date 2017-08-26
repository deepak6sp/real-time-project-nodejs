import express from 'express';
const homeRouter = express.Router();

homeRouter.get('/', (req, res) => {
  res.send({
    "name": "deepak6sp",
    "profile": "web developer"
  })
});

module.exports = homeRouter;
