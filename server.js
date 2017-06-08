var express = require('express');
var path = require('path');
var webpack = require('webpack');
var app = express();
var pg = require('pg');
var bodyParser = require('body-parser');
var multer = require('multer');

var isDevelopment = (process.env.NODE_ENV !== 'production');
var static_path = path.join(__dirname, 'public');

app.use('/images', express.static(__dirname + '/images'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(static_path))
  .get('/', function (req, res) {
    res.sendFile('index.html', {
      root: static_path
    });
  }).listen(process.env.PORT || 8080, function (err) {
    if (err) { console.log(err) };
    console.log('Listening at localhost:8080');
  });

if (isDevelopment) {
  var config = require('./webpack.config');
  var WebpackDevServer = require('webpack-dev-server');

  new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true
  }).listen(3000, 'localhost', function (err, result) {
    if (err) { console.log(err) }
    console.log('Listening at localhost:3000');
  });
}


/* 
Schema: 
    PayscaleGames
Tables:
    Votes
      Week, Option 1 Votes, Option 2 votes, Option 3 votes, Option 4 votes, Voter emails
    Players
      Player, Wins, Losses, Profile picture url
    Games
      Name, Times played, Average playtime, How-to-play link, Image url, Favorited by players
    Sessions
      Game played, players, start time, end time, winner
*/

// Implement API endpoints
var database_url = 'postgres://sixknbsogjnqoz:5b14450def84fead3d307cb453463f85e0ca07114c4eddd69d215c5f4f778ca1@ec2-23-23-237-68.compute-1.amazonaws.com:5432/d3prn68aiagr7s';

// Add Player
app.post('/api-addplayer', function(req, res) {
  pg.defaults.ssl = true;
  pg.connect(database_url, function(err, client) {
    if (err) {
      res.status(400);
      res.send(JSON.stringify(err.detail));
      return;
    }

    var query = client.query("INSERT INTO players VALUES ($1, $2, $3, $4, $5) RETURNING email;", [req.body.email, req.body.name, 0, 0, ""],
      function(err, result) {
        if (err) {
          res.status(400);
          res.send(JSON.stringify(err.detail));
          return;
        }

        res.status(200);
        res.send(JSON.stringify(result));
      });
  });
});

// Get Player
app.get('/api-getplayer', function(req, res) {
  pg.defaults.ssl = true;
  pg.connect(database_url, function(err, client) {
    if (err) {
      res.status(400);
      res.send(JSON.stringify(err.detail));
      return;
    }

    var query = client.query("SELECT * FROM players WHERE email = $1", [req.query.email],
      function(err, result) {
        if (err) {
          res.status(400);
          res.send(JSON.stringify(err.detail));
          return;
        }

        console.log(result);
      });

    query.on("row", function (row, result) {
      console.log(result);
      result.addRow(row);
      console.log(result);
    });

    query.on("end", function (result) {
      res.status(200);
      res.send(JSON.stringify(result.rows));
    });
  });
});

// Remove Player
app.post('/api-removeplayer', function(req, res) {
  pg.defaults.ssl = true;
  pg.connect(database_url, function(err, client) {
    if (err) {
      res.status(400);
      res.send(JSON.stringify(err.detail));
      return;
    }

    var query = client.query("DELETE FROM players WHERE email = $1", [req.body.email],
      function(err, result) {
        if (err) {
          res.status(400);
          res.send(JSON.stringify(err.detail));
          return;
        }

        res.status(200);
        res.send('OK');
      });
  });
});


// CREATE TABLE players (email VARCHAR(200) PRIMARY KEY NOT NULL, name VARCHAR(200) NOT NULL, sessions INT, wins INT, profile_img_url VARCHAR(2083));
// CREATE TABLE games 
// CREATE TABLE sessions
// CREATE TABLE votes