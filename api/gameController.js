
// CREATE TABLE games (name TEXT PRIMARY KEY NOT NULL, times_played INT NOT NULL, average_play_time REAL NOT NULL, how_to_play_url TEXT, image_url TEXT);

module.exports = function(app, pg, database_url) {
    /* 
        Add Game row to DB.
    */
    app.post('/api/games/add', function(req, res, next) {
        pg.defaults.ssl = true;
        pg.connect(database_url, function(err, client) {
            if (err) {
                res.status(400);
                res.send(JSON.stringify(err.detail));
                return next(err);
            }

            var q = 'INSERT INTO games VALUES ($1, $2, $3, $4, $5);';
            var query = client.query(q, [req.body.name.toLowerCase(), 0, 0, null, null], function(err, result) {
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
        Get Game row from DB.
    */
    app.get('/api/games/get', function(req, res, next) {
        pg.defaults.ssl = true;
        pg.connect(database_url, function(err, client) {
            if (err) {
                res.status(400);
                res.send(JSON.stringify(err.detail));
                return next(err);
            }

            var q = 'SELECT * FROM games WHERE name = $1;';
            var query = client.query(q, [req.query.name.toLowerCase()], function(err, result) {
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
        Update Game row in DB.
    */
    // TODO: NOT WORKING YET
    app.put('/api/games/update', function(req, res, next) {
        pg.defaults.ssl = true;
        pg.connect(database_url, function(err, client) {
            if (err) {
                res.status(400);
                res.send(JSON.stringify(err.detail));
                return next(err);
            }

            var q = 'UPDATE games WHERE name = $1 SET (';

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
        Remove Vote row from DB.
    */
    app.delete('/api/games/remove', function(req, res, next) {
        pg.defaults.ssl = true;
        pg.connect(database_url, function(err, client) {
            if (err) {
                res.status(400);
                res.send(JSON.stringify(err.detail));
                return next(err);
            }

            var q = 'DELETE FROM games WHERE name = $1;';
            var query = client.query(q, [req.query.name.toLowerCase()], function(err, result) {
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