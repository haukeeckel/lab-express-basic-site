const express = require("express");
const app = express();

//  MIDDLEWARE
app.use(express.static(`${__dirname}/public`));


// ROUTES
app.get("/", function(req, res, next) {
  res.sendFile(`${__dirname}/views/index.html`);
});

app.get("/work", function(req, res, next) {
  res.sendFile(`${__dirname}/views/work.html`);
});

app.get("/about", function(req, res, next) {
  res.sendFile(`${__dirname}/views/about.html`);
});

app.listen(8000);
