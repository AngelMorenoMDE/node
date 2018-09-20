var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', function (req, res) {
  res.send('Hello World!' + req.param.id);
});

app.listen(8080, function () {
  console.log('Example app listening on port 3000!');
});