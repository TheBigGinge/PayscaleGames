
// CREATE TABLE players (email TEXT PRIMARY KEY NOT NULL, name TEXT NOT NULL, sessions INT NOT NULL, wins INT NOT NULL);

module.exports = function(app, pg, database_url) {
    /* 
        Add Player row to DB with default values.
    */
    app.post('/api/player/add', function(req, res, next) {
        pg.defaults.ssl = true;
        pg.connect(database_url, function(err, client) {
            if (err) {
                res.status(400);
                res.send(JSON.stringify(err.detail));
                return next(err);
            }

            var q = 'INSERT INTO players VALUES ($1, $2, $3, $4);';
            var query = client.query(q, [req.body.email.toLowerCase(), req.body.name, 0, 0], function(err, result) {
                if (err) {
                    res.status(400);
                    res.send(JSON.stringify(err.detail));
                    return next(err);
                }

                res.status(200);
                res.send('OK');
            });
        });
    });

    /* 
        Update Player row with a session and a win, if they did.
    */
    app.put('/api/player/addsession', function(req, res, next) {
        pg.defaults.ssl = true;
        pg.connect(database_url, function(err, client) {
            if (err) {
                res.status(400);
                res.send(JSON.stringify(err.detail));
                return next(err);
            }

            // Get current session and win values
            var q1 = 'SELECT * FROM players WHERE email = $1;';
            var query1 = client.query(q1, [req.body.email.toLowerCase()], function(err, result) {
                if (err) {
                    res.status(400);
                    res.send(JSON.stringify(err.detail));
                    return next(err);
                }
            });

            var sessions = 0;
            var wins = 0;
            query1.on('end', function (result) {
                var row = result.rows[0];
                sessions = row.sessions;
                wins = row.wins;

                sessions++;
                if (req.body.winner) {
                    wins++;
                }

                // Update sessions and win values
                var q2 = 'UPDATE players SET sessions = $1, wins = $2 WHERE email = $3;';
                var query2 = client.query(q2, [sessions, wins, req.body.email.toLowerCase()], function(err, result) {
                    if (err) {
                        res.status(400);
                        res.send(JSON.stringify(err.detail));
                        return next(err);
                    }

                    res.status(200);
                    res.send('OK');
                });
            });
        });
    });

    /* 
        Get Player row from DB.
    */
    app.get('/api/player/get', function(req, res, next) {
        pg.defaults.ssl = true;
        pg.connect(database_url, function(err, client) {
            if (err) {
                res.status(400);
                res.send(JSON.stringify(err.detail));
                return next(err);
            }

            var q = 'SELECT * FROM players WHERE email = $1;';
            var query = client.query(q, [req.query.email.toLowerCase()], function(err, result) {
                if (err) {
                    res.status(400);
                    res.send(JSON.stringify(err.detail));
                    return next(err);
                }
            });

            query.on('end', function (result) {
                res.status(200);
                res.send(JSON.stringify(result.rows[0]));
            });
        });
    });

    /* 
        Remove Player row from DB.
    */
    app.delete('/api/player/remove', function(req, res, next) {
        pg.defaults.ssl = true;
        pg.connect(database_url, function(err, client) {
            if (err) {
                res.status(400);
                res.send(JSON.stringify(err.detail));
                return next(err);
            }

            var q = 'DELETE FROM players WHERE email = $1;';
            var query = client.query(q, [req.query.email.toLowerCase()], function(err, result) {
                if (err) {
                    res.status(400);
                    res.send(JSON.stringify(err.detail));
                    return next(err);
                }

                res.status(200);
                res.send('OK');
            });
        });
    });
};