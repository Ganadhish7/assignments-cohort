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
