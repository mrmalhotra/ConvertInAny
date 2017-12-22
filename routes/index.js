var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(__dirname,'public/index.html');
});

router.get('/to-pdf',function (req,res) {
    res.send('To Pdf COMING SOON...!')
});

router.get('/*',function (req,res) {
    res.send('COMING SOON...!')
});
//
module.exports = router;
