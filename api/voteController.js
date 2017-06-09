
// CREATE TABLE votes (week INT PRIMARY KEY NOT NULL, option_1_name TEXT NOT NULL, option_1_votes INT NOT NULL, option_2_name TEXT NOT NULL, option_2_votes INT NOT NULL, option_3_name TEXT NOT NULL, option_3_votes INT NOT NULL, voted_players TEXT[]);

module.exports = function(app, pg, database_url) {
    /* 
        Add Vote row to DB.
    */
    app.post('/api/votes/add', function(req, res, next) {
        pg.defaults.ssl = true;
        pg.connect(database_url, function(err, client) {
            if (err) {
                res.status(400);
                res.send(JSON.stringify("Unable to connect to DB"));
                return next(err);
            }

            var q = 'INSERT INTO votes VALUES ($1, $2, $3, $4, $5, $6, $7, $8);';
            var query = client.query(q, [req.body.week, req.body.option_1_name, 0, req.body.option_2_name, 0, req.body.option_3_name, 0, []], function(err, result) {
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
        Get Vote row from DB.
    */
    app.get('/api/votes/get', function(req, res, next) {
        pg.defaults.ssl = true;
        pg.connect(database_url, function(err, client) {
            if (err) {
                res.status(400);
                res.send(JSON.stringify("Unable to connect to DB"));
                return next();
            }

            var q = 'SELECT * FROM votes WHERE week = $1;';
            var query = client.query(q, [req.query.week], function(err, result) {
                if (err) {
                    res.status(400);
                    res.send(JSON.stringify("Unable to get vote"));
                    return next();
                }
            });

            query.on('end', function (result) {
                if (result.rows[0]) {
                    res.status(200);
                    res.send(JSON.stringify(result.rows[0]));
                } else {
                    res.status(400);
                    res.send(JSON.stringify("Unable to get vote"));
                    return next();
                }
            });
        });
    });

    /* 
        Update Vote row in DB.
    */
    // TODO: NOT WORKING YET
    app.put('/api/votes/update', function(req, res, next) {
        pg.defaults.ssl = true;
        pg.connect(database_url, function(err, client) {
            if (err) {
                res.status(400);
                res.send(JSON.stringify("Unable to connect to DB"));
                return next();
            }

            var q = 'UPDATE votes WHERE week = $1 SET (';

            var query = client.query(q, params , function(err, result) {
                if (err) {
                    res.status(400);
                    res.send(JSON.stringify("Unable to update vote"));
                    return next();
                }

                res.status(200);
                res.send('OK');
            });
        });
    });

    /* 
        Remove Vote row from DB.
    */
    app.delete('/api/votes/remove', function(req, res, next) {
        pg.defaults.ssl = true;
        pg.connect(database_url, function(err, client) {
            if (err) {
                res.status(400);
                res.send(JSON.stringify("Unable to connect to DB"));
                return next();
            }

            var q = 'DELETE FROM votes WHERE week = $1;';
            var query = client.query(q, [req.query.week], function(err, result) {
                if (err) {
                    res.status(400);
                    res.send(JSON.stringify("Unable to delete vote"));
                    return next();
                }

                res.status(200);
                res.send('OK');
            });
        });
    });
};