const router = require("express").Router();
let Content = require("../models/content.model.js");

router.route("/").get((req, res) => {
  Content.find()
    .then((content) => res.json(content))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/add").post((req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const image = req.body.image;
  const price = req.body.price;
  const newEvent = new Event({
    title,
    description,
    image,
    price,
  });

  newEvent
    .save()
    .then(() => res.json("content added!!"))
    .catch((err) => res.status(400).json("Error:" + err));
});
module.exports = router;
