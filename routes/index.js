
const router = require('express').Router();

router
  .get('/', (req, res) => {
    const message = {};
    res.send(message);
  });

module.exports = router;
