const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// Handles fetching win/loss ratio and calculating ranks
// The query will handle calculating the ratio and ordering the data by it
// The rank number will be the array index of the user
// Returns an array of objects with the following data:
// {
//   user_id: int,
//   total_wins: int,
//   total_losses: int
// }
router.get('/', (req, res) => {
  const queryText = `SELECT "username", "total_wins", "total_losses", 
  sum(cast("total_wins" as decimal)/
    CASE
      WHEN "total_losses"=0 THEN 1
      ELSE "total_losses"
  END) AS "win_loss_ratio"
  FROM "user" GROUP BY "username", "total_wins", "total_losses"
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

module.exports = router;
