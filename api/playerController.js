
// CREATE TABLE players (email TEXT PRIMARY KEY NOT NULL, name TEXT NOT NULL, sessions INT, wins INT, profile_img_url TEXT);

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

            var q = 'INSERT INTO players VALUES ($1, $2, $3, $4, $5);';
            var query = client.query(q, [req.body.email.toLowerCase(), req.body.name, 0, 0, ''], function(err, result) {
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
        Update Player row in DB.
    */
    // TODO: NOT WORKING YET
    app.put('/api/player/update', function(req, res, next) {
        pg.defaults.ssl = true;
        pg.connect(database_url, function(err, client) {
            if (err) {
                res.status(400);
                res.send(JSON.stringify(err.detail));
                return next(err);
            }

            var q = 'UPDATE players WHERE email = $1 SET (';
            var params = [req.body.email];
            if (req.body.name) {
                q += ('name = $' + curr);
                params.push(req.body.name);
            }
            if (req.body.wins) {
                changesArray.push('wins = ' + req.body.wins);
            }
            if (req.body.sessions) {
                changesArray.push('sessions = ' + req.body.sessions);
            }
            if (req.body.profile_img_url) {
                changesArray.push('profile_img_url = ' + req.body.profile_img_url);
            }

            var query = client.query(q, params , function(err, result) {
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