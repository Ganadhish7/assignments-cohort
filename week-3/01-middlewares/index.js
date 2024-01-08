<<<<<<< HEAD
const express = require("express");

const app = express();

function isOldEnoughMiddleware(req, res, next) {
  const age = req.query.age;
  if (age >= 14) {
    next();
  } else {
    res.json({
      msg: "Sorry you are not old enough",
    });
  }
}

app.get("/ride1", isOldEnoughMiddleware, function (req, res) {
  res.json({
    msg: "You have successfully riden the ride ",
  });
});

app.listen(3000);
=======
const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.send("hi there");
});

app.listen(3000);
>>>>>>> e766cada03e7a8b945605c46e4cbad8aa7127dc8
