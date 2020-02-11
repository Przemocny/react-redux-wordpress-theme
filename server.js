const express = require('express');
const path = require('path');
const app = express();

app.use('/static', express.static(path.join(__dirname, 'src')));
app.use('/static', express.static(path.join(__dirname, 'public')));


app.get('/', function (req, res) {
  console.log('app')
  res.sendFile(path.join(__dirname, 'src', 'App.js'));
});


const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);