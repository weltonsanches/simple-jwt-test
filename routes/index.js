
require("dotenv").config();
const router = require('express').Router();
const jwt = require('jsonwebtoken');

const createUserToken = (user, password) => {
  return jwt.sign({ id: `${user}${password}` }, process.env.JWT_PASS, { expiresIn: process.env.EXPIRES_IN });
}

router
  .post('/token', (req, res) => {
    const { user, password } = req.body;
    if (!user || !password)
      return res.status(403).send({ error: 'Dados insuficientes!' });

    if (user !== 'Numenu' || password !== '123123')
      return res.status(403).send({ error: 'Credenciais incorretas!' });

    return res.send({ token: createUserToken(user, password) });
  });

module.exports = router;
