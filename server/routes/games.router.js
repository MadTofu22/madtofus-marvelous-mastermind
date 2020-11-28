const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

// Handle adding a game to the games table
router.post('/:id', rejectUnauthenticated, (req, res) => {
  if (req.user.id === Number(req.params.id)) {
    const queryText = `INSERT INTO "games" (user_id, game_won) VALUES ($1, $2);`;
    const queryParams = [req.user.id, req.body.result];
   
    pool.query(queryText, queryParams)
      .then(result => {
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

// Handle updating the users win/loss record
router.put('/:id', rejectUnauthenticated, (req, res) => {
  if (req.user.id === Number(req.params.id)) {

    const queryText = req.body.result ? 
      `UPDATE "user" SET total_wins = total_wins+1 WHERE id = $1;`
      :
      `UPDATE "user" SET total_losses = total_losses+1 WHERE id = $1;`
      ;

    pool.query(queryText, [req.user.id])
      .then(result => {
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
});

// Handle deleting all a users games when they delete their profile

module.exports = router;