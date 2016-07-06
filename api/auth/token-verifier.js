const jwt    = require('jsonwebtoken')
const config = require('../config/config.js')

module.exports = function(req, res, next) {
  var token = req.body.token || req.query.token || req.headers['x-access-token'];

  if (!token) {
    return res.status(403).send({
        success: false,
        message: 'No token provided'
    });
  }

  jwt.verify(token, config.secret, function(err, decoded) {
    if (err) {
      return res.json({
        success: false,
        message: 'Failed to authenticate token'
      });
    }

    req.decoded = decoded;
    next();
  });
}
