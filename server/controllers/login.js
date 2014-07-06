var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.send('respond with a resource');

  //res.redirect( "https://www.yammer.com/dialog/oauth?" + 
  //              "client_id=[:client_id]&" + 
  //              "redirect_uri=[:redirect_uri]");
});

module.exports = router;
