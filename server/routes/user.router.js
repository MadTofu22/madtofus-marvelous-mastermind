const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {
  // Send back user object from the session (previously queried from the database)
  res.send(req.user);
});

// Handles getting a Users profile data by their Username
router.get('/:name', (req, res) => {
  const queryText = `SELECT * FROM "user" WHERE "username" = $1;`;
  
  pool.query(queryText, [req.params.name])
    .then(result => {
      // Define profileData object to prevent password, first_name, and last_name from being sent to client.
      const profileData = {
        username: result.rows[0].username,
        bio: result.rows[0].bio,
        avatar_url: result.rows[0].avatar_url,
        total_wins: result.rows[0].total_wins,
        total_losses: result.rows[0].total_losses,
      };
      console.log(profileData);
      res.send(profileData);
    })
    .catch(error => {
      console.log('Error in /api/user/:name', error);
      res.sendStatus(500);
    });
})

// This handles updating the editable field in user profile.
// The data received will be a full object of all existing user profile data with any changed info.
router.put('/:id', rejectUnauthenticated, (req, res) => {
  console.log('in user put, req.body:', req.body);
  if (req.user.id === Number(req.params.id)) {
    const queryText = `
      UPDATE "user" 
      SET "bio" = $1 ,
      "avatar_url" = $2,
      "first_name" = $3,
      "last_name" = $4
      WHERE "id" = $5;`;

    const queryParams = [
      req.body.bio,
      req.body.avatar_url,
      req.body.first_name,
      req.body.last_name,
      req.user.id
    ]

    pool.query(queryText, queryParams)
      .then(result => {
        res.sendStatus(202);
      })
      .catch(error => {
        console.log(error);
        res.sendStatus(403);
      });
  } else {
    console.log('Incorrect user attempting to access this profile.')
    res.sendStatus(403);
  }

});

router.delete('/:id', rejectUnauthenticated, (req, res) => {
  console.log('in delete endpoint, req.params.id:', req.params.id, 'vs req.user.id:', req.user.id);
  if (req.user.id === Number(req.params.id)) {
    const gamesQuery = 'DELETE FROM "games" WHERE "user_id" = $1;';
    pool
      .query(gamesQuery, [req.user.id])
      .then(result => {
        console.log(result.command, 'in "games" successful');
        const userQuery = 'DELETE FROM "user" WHERE "id" = $1;';
        pool
          .query(userQuery, [req.user.id])
          .then(result => {
            console.log(result.command, 'in "user" successful');
          })
          .catch(error => {
            console.log(error);
            res.sendStatus(403);    
          });
        res.sendStatus(202);
      })
      .catch(error => {
        console.log(error);
        res.sendStatus(403);
      });
  } else {
    console.log('Incorrect user attempting to access this profile.');
    res.sendStatus(400);
  }
})

// Handles fetching win/loss ratio and calculating ranks
// The query will handle calculating the ratio and ordering the data by it
// The rank number will be the array index of the user
// Returns an array of objects with the following data:
// {
//   user_id: int,
//   total_wins: int,
//   total_losses: int
// }
router.get('/ranks', (req, res) => {
  const queryText = `SELECT "username", sum("total_wins"/
  CASE
    WHEN "total_losses"=0 THEN 1
    ELSE "total_losses"
  END) AS "win_loss_ratio"
  FROM "user" GROUP BY "username"
  ORDER BY "win_loss_ratio" DESC;`;

  pool
    .query(queryText)
    .then(result => {
      console.log(result.rows);
      res.send(result.rows)})
    .catch(error => {
      console.log('Error in /api/user/ranks', error);
      res.sendStatus(500);
    });
});

// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted
router.post('/register', (req, res, next) => {
  const username = req.body.username;
  const password = encryptLib.encryptPassword(req.body.password);

  const queryText = `INSERT INTO "user" (username, password)
    VALUES ($1, $2) RETURNING id`;
  pool
    .query(queryText, [username, password])
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log('User registration failed: ', err);
      res.sendStatus(500);
    });
});

// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post('/login', userStrategy.authenticate('local'), (req, res) => {
  res.sendStatus(200);
});

// clear all server session information about this user
router.post('/logout', (req, res) => {
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
});

module.exports = router;
