const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

// Handle adding a new game to the table
router.post('/', (req, res) => {
    res.sendStatus(200);
});

// Handle getting a specific users game history
router.get('/:id', (req, res) => {
    res.sendStatus(200);
});

module.exports = router;