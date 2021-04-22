var express = require('express');
let bodyParser = require('body-parser');
var router = express.Router();



router.use(express.static('public'));



module.exports = router;
