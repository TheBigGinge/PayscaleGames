
// CREATE TABLE sessions (week INT NOT NULL, game_played TEXT NOT NULL, players TEXT[] NOT NULL, play_time REAL NOT NULL, winner TEXT NOT NULL);

module.exports = function(app, pg, database_url) {
    /* 
        Add Session row to DB.
    */
    app.post('/api/sessions/add', function(req, res, next) {
        pg.defaults.ssl = true;
        pg.connect(database_url, function(err, client) {
            if (err) {
                res.status(400);
                res.send(JSON.stringify(err.detail));
                return next(err);
            }

            var q = 'INSERT INTO sessions VALUES ($1, $2, $3, $4, $5);';
            var query = client.query(q, [req.body.week, req.body.game_name.toLowerCase(), req.body.players, req.body.play_time, req.body.winner], function(err, result) {
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
        Get Session row from DB.
    */
    app.get('/api/sessions/get', function(req, res, next) {
        pg.defaults.ssl = true;
        pg.connect(database_url, function(err, client) {
            if (err) {
                res.status(400);
                res.send(JSON.stringify(err.detail));
                return next(err);
            }

            var q = 'SELECT * FROM sessions WHERE week = $1;';
            var query = client.query(q, [req.query.week], function(err, result) {
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
        Remove Session row from DB.
    */
    app.delete('/api/sessions/remove', function(req, res, next) {
        pg.defaults.ssl = true;
        pg.connect(database_url, function(err, client) {
            if (err) {
                res.status(400);
                res.send(JSON.stringify(err.detail));
                return next(err);
            }

            var q = 'DELETE FROM sessions WHERE week = $1;';
            var query = client.query(q, [req.query.week], function(err, result) {
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