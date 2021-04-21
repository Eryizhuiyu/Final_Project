var express = require('express');
let bodyParser = require('body-parser');
var router = express.Router();


router.use(express.static('public'));

/*

router.get('/about',(req,res)=>{
    res.sendFile(__dirname+'/about.html');
});

*/
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



module.exports = router;
