var express = require('express');
let bodyParser = require('body-parser');
var router = express.Router();



router.use(express.static('public'));
/*
router.get('/about',(req,res)=>{
    res.sendFile(__dirname+'/about.html');
});

*/


module.exports = router;
