var express = require('express');
let bodyParser = require('body-parser');

var router = express.Router();
router.use(bodyParser.urlencoded({extended:true}));

/*routing*/
router.use(express.static('public'));
router.get('/route',(req,res)=>{
    res.sendFile(__dirname+"/route_test.html");
});

/*importing excel to the database 
DO NOT UPLOAD THE SAVE FILE multiple times!!!!!!!!!!!

var node_xlsx = require('node-xlsx');
let obj = node_xlsx.parse(__dirname+'/photo_database.xlsx');
//get the data in the first excel file;
let excelObj = obj[0].data;
let insertData = [];
//iterating the excel data line by line
for(var i=1; i<excelObj.length; i++) {
    var rdata = excelObj[i];
    var photoObj = new Object();
    
    for(var j=0; j<rdata.length;j++) {
        photoObj[excelObj[0][j]]=rdata[j];
    }
    insertData.push(photoObj);
    console.log(insertData);
};

*/



/*Connecting to the database*/
console.log('Connecting to database...');
let MongoClient = require('mongodb').MongoClient;
let connectingString = "mongodb+srv://wsw:123@cluster0.7wcgz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
MongoClient.connect(connectingString, {useUnifiedTopology: true},(err,client) =>{
    if(err) return console.error(err)
    console.log('Connected to database.');

    let db = client.db("silvia_photography");
    let photo_data = db.collection("photo_data");
    //photo_data.update({"img_travel_destination": "Gotswold" },{"img_travel_destination":"Cotswold"});
    //photo_data.insertMany(insertData,{ordered:true});

    
    /*biuld a page for each photo
    console.log("building photo pages..."); 
    photo_data.find().forEach( function(img) { 
        img_page_url = "/"+img.photo_id;
        router.get(img_page_url,(req,res)=>{
            let locQuery = {photo_id:img.photo_id};
            db.collection('photo_data').find(locQuery).toArray().then(results=>{
                //console.log(results);
                res.render('img_page.ejs',{results:results[0]})
            })
            .catch(error => console.error(error))
        });     
        
        
        
        
    }
    );
    console.log('Builded photo pages.');

    */
    
    /*biuld a page for each destination*/
    console.log("building photo pages...");     
  
    photo_data.find().forEach( function(img) {
        img_page_url = "/"+img.photo_id;
        router.get(img_page_url,(req,res)=>{
            let locQuery = {photo_id:img.photo_id};
            db.collection('photo_data').find(locQuery).toArray().then(results=>{
                //console.log(results);
                res.render('img_page.ejs',{results:results[0]})
            })
            .catch(error => console.error(error))
        }); 
        
        router.post('/comments_'+img.photo_id,(req,res)=>{
            console.log("comments photo idddddddd"+img.photo_id);
            console.log(req.body);
            photo_data.update({photo_id: img.photo_id},{$push:{img_comments:req.body}})
            .then(result => {
            res.redirect('/'+img.photo_id);
        })
        .catch(error => console.error(error))
        
        });
        
    }
    );
    console.log('TESTTTTTTTTT Builded photo pages.');
    
    
    /*build the dynamic travelog page which updates with the photo database*/
    router.get('/travelog',(req,res)=>{


        let locQuery = {img_travel_destination:{$ne:null}};
        db.collection('photo_data').find(locQuery).toArray().then(results=>{
            console.log("success!");
            let Beijing_url = results.filter((item,index,arr)=>{return item.img_travel_destination=="Beijing"}); 
            let Las_Vegas_url = results.filter((item,index,arr)=>{return item.img_travel_destination=="Las Vegas"}); 
            let Miami_url = results.filter((item,index,arr)=>{return item.img_travel_destination=="Miami"}); 
            let Cotswold_url = results.filter((item,index,arr)=>{return item.img_travel_destination=="Cotswold"}); 
            let Atlanta_url = results.filter((item,index,arr)=>{return item.img_travel_destination=="Atlanta"}); 
            
            res.render('travelog.ejs',{Beijing_url:Beijing_url,Las_Vegas_url:Las_Vegas_url,Miami_url:Miami_url, Cotswold_url:Cotswold_url,Atlanta_url:Atlanta_url})
            
            
            //router.get('/Beijing')
        })
        .catch(error => console.error(error))
        
    }       
              
    );
    

    
    router.get('/show-quotes',(req,res)=>{
        let quoteQuery = {name:"karriem", number:{$exists:1}};
        db.collection('demo_ccollection').find(quoteQuery).toArray();
    })
})







module.exports = router;
