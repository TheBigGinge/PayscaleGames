
// CREATE TABLE votes (week INT PRIMARY KEY NOT NULL, option_1_name TEXT NOT NULL, option_1_votes TEXT[] NOT NULL, option_2_name TEXT NOT NULL, option_2_votes TEXT[] NOT NULL, option_3_name TEXT NOT NULL, option_3_votes TEXT[] NOT NULL);

module.exports = function(app, pg, database_url) {
    /* 
        Add Vote row to DB.
    */
    app.post('/api/votes/add', function(req, res, next) {
        pg.defaults.ssl = true;
        pg.connect(database_url, function(err, client) {
            if (err) {
                res.status(400);
                res.send('Unable to connect to DB: ' + err.detail);
                return next();
            }

            var q = 'INSERT INTO votes VALUES ($1, $2, $3, $4, $5, $6, $7);';
            var query = client.query(q, [req.body.week, req.body.option_1_name, [], req.body.option_2_name, [], req.body.option_3_name, []], function(err, result) {
                if (err) {
                    res.status(400);
                    res.send('Unable to add vote: ' + err.detail);
                    return next();
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
                res.send('Unable to connect to DB: ' + err.detail);
                return next();
            }

            var q = 'SELECT * FROM votes WHERE week = $1;';
            var query = client.query(q, [req.query.week], function(err, result) {
                if (err) {
                    res.status(400);
                    res.send('Unable to get vote: ' + err.detail);
                    return next();
                }
            });

            query.on('end', function (result) {
                if (result.rows[0]) {
                    res.status(200);
                    res.send(JSON.stringify(result.rows[0]));
                } else {
                    res.status(400);
                    res.send('Unable to get vote: not found');
                    return next();
                }
            });
        });
    });

    /* 
        Update Vote row in DB.
    */
    app.put('/api/votes/update', function(req, res, next) {
        pg.defaults.ssl = true;
        pg.connect(database_url, function(err, client) {
            if (err) {
                res.status(400);
                res.send('Unable to connect to DB: ' + err.detail);
                return next();
            }

             // Get current session value
            var q1 = 'SELECT * FROM votes WHERE week = $1;';
            var query1 = client.query(q1, [req.query.week], function(err, result) {
                if (err) {
                    res.status(400);
                    res.send('Unable to get vote: ' + err.detail);
                    return next();
                }
            });

            query1.on('end', function (result) {
                var row = result.rows[0];

                if (!row) {
                    res.status(400);
                    res.send('Unable to update vote: not found');
                    return next();
                }

                var option_1 = row.option_1_name.toLowerCase();
                var option_2 = row.option_2_name.toLowerCase();
                var option_3 = row.option_3_name.toLowerCase();
                var voters_1 = row.option_1_votes;
                var voters_2 = row.option_2_votes;
                var voters_3 = row.option_3_votes;
                var email = req.query.email.toLowerCase();
                var vote = req.query.vote.toLowerCase();

                if (voters_1.indexOf(email) > -1 || voters_2.indexOf(email) > -1 || voters_3.indexOf(email) > -1) {
                    res.status(400);
                    res.send('Unable to update vote: player has already voted');
                    return next();
                }

                var result = [];
                var q2 = '';
                if (vote === option_1) {
                    result = voters_1;
                    q2 = 'UPDATE votes SET option_1_votes = $1 WHERE week = $2;';
                } else if (vote === option_2) {
                    result = voters_2;
                    q2 = 'UPDATE votes SET option_2_votes = $1 WHERE week = $2;';
                } else if (vote === option_3) {
                    result = voters_3;
                    q2 = 'UPDATE votes SET option_3_votes = $1 WHERE week = $2;';
                } else {
                    res.status(400);
                    res.send('Unable to update vote: not one of the available options');
                    return next();
                }

                result.push(email);
                var query2 = client.query(q2, [result, req.query.week], function(err, result) {
                    if (err) {
                        res.status(400);
                        res.send('Unable to update vote: ' + err.detail);
                        return next();
                    }

                    res.status(200);
                    res.send('OK');
                });
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
                res.send('Unable to connect to DB: ' + err.detail);
                return next();
            }

            var q = 'DELETE FROM votes WHERE week = $1;';
            var query = client.query(q, [req.query.week], function(err, result) {
                if (err) {
                    res.status(400);
                    res.send('Unable to delete vote: ' + err.detail);
                    return next();
                }

                res.status(200);
                res.send('OK');
            });
        });
    });
};