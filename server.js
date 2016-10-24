var express = require('express');

// Create Server App
var app = express();

// Hämta Heroku port vid uppladdning
const PORT = process.env.PORT || 3000;

// Används för att kunna push till heroku
// Skickar trafik från https -> http
app.use(function (req, res, next) {
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
});

app.use(express.static('public'));

app.listen(PORT, function() {
  console.log('Servern startades på port ' + PORT);
});
