var express = require('express');
let bodyParser = require('body-parser');
var router = express.Router();



router.use(express.static('public'));
/*
router.get('/about',(req,res)=>{
    res.sendFile(__dirname+'/about.html');
});

*/

router.use(bodyParser.urlencode({extended: true}));
//connect to the database
let MongoClient = require('mongodb').MongoClient;

let connectionString = "mongodb+ev"

module.exports = router;
