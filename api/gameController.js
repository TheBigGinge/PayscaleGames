
// CREATE TABLE games (name TEXT PRIMARY KEY NOT NULL, sessions INT NOT NULL, info_url TEXT NOT NULL, image_url TEXT NOT NULL);

module.exports = function(app, pg, database_url) {
    /* 
        Add Game row to DB.
    */
    app.post('/api/games/add', function(req, res, next) {
        pg.defaults.ssl = true;
        pg.connect(database_url, function(err, client) {
            if (err) {
                res.status(400);
                res.send(JSON.stringify("Unable to connect to DB"));
                return next();
            }

            var q = 'INSERT INTO games VALUES ($1, $2, $3, $4);';
            var query = client.query(q, [req.body.name.toLowerCase(), 0, req.body.info_url, req.body.image_url], function(err, result) {
                if (err) {
                    res.status(400);
                    res.send(JSON.stringify("Unable to add new game"));
                    return next();
                }

                res.status(200);
                res.send('OK');
            });
        });
    });

    /* 
        Get Game row from DB.
    */
    app.get('/api/games/get', function(req, res, next) {
        pg.defaults.ssl = true;
        pg.connect(database_url, function(err, client) {
            if (err) {
                res.status(400);
                res.send(JSON.stringify("Unable to connect to DB"));
                return next();
            }

            var q = 'SELECT * FROM games WHERE name = $1;';
            var query = client.query(q, [req.query.name.toLowerCase()], function(err, result) {
                if (err) {
                    res.status(400);
                    res.send(JSON.stringify("Unable to get game"));
                    return next();
                }
            });

            query.on('end', function (result) {
                if (result.rows[0]) {
                    res.status(200);
                    res.send(JSON.stringify(result.rows[0]));
                } else {
                    res.status(400);
                    res.send(JSON.stringify("Unable to get game"));
                    return next();
                }
            });
        });
    });

    /* 
        Update session count for a game.
    */
    app.put('/api/games/addsession', function(req, res, next) {
        pg.defaults.ssl = true;
        pg.connect(database_url, function(err, client) {
            if (err) {
                res.status(400);
                res.send(JSON.stringify("Unable to connect to DB"));
                return next();
            }

            // Get current session value
            var q1 = 'SELECT * FROM games WHERE name = $1;';
            var query1 = client.query(q1, [req.query.name.toLowerCase()], function(err, result) {
                if (err) {
                    res.status(400);
                    res.send(JSON.stringify("Unable to get game"));
                    return next();
                }
            });

            var sessions = 0;
            query1.on('end', function (result) {
                var row = result.rows[0];
                sessions = row.sessions;
                sessions++;

                // Update sessions
                var q2 = 'UPDATE games SET sessions = $1 WHERE name = $2;';
                var query2 = client.query(q2, [sessions, req.query.name.toLowerCase()], function(err, result) {
                    if (err) {
                        res.status(400);
                        res.send(JSON.stringify("Unable to update game"));
                        return next();
                    }

                    res.status(200);
                    res.send('OK');
                });
            });
        });
    });

    /* 
        Remove Game row from DB.
    */
    app.delete('/api/games/remove', function(req, res, next) {
        pg.defaults.ssl = true;
        pg.connect(database_url, function(err, client) {
            if (err) {
                res.status(400);
                res.send(JSON.stringify("Unable to connect to DB"));
                return next();
            }

            var q = 'DELETE FROM games WHERE name = $1;';
            var query = client.query(q, [req.query.name.toLowerCase()], function(err, result) {
                if (err) {
                    res.status(400);
                    res.send(JSON.stringify("Unable to delete game"));
                    return next();
                }

                res.status(200);
                res.send('OK');
            });
        });
    });
};