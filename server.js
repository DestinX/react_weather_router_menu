var express = require('express');

// Create Server App
var app = express();

app.use(express.static('public'));

app.listen(3000, function() {
  console.log('Servern startades på port 3000, besök http://localhost:3000');
});
