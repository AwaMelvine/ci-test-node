const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/hello', function(req, res){
  res.status(200).json({ greeting: "Hello" });
});

app.listen(process.env.PORT || 5000, () => {
  console.log('Server started at localhost:5000');
});

module.exports = app;
