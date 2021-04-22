
/*jslint devel: true */
/*eslint-env browser*/
/*eslint no-console: 0*/
/*global
alert, confirm, console, promp, $
*/

let url;
/*play the background music and change the background color when logo is clicked*/
function changeBackground(url) {
    document.body.style.backgroundImage = "url";
    //var audio = document.createElement("audio");
    //audio.src = "river_sound.wav";
   //audio.play();
}

    
    
var a = document.querySelector('#esp_bg');
console.log(a);

$('#esp_bg').hover(function(){
    document.body.style.backgroundImage = "url(images/portfolio_img/Atlanta/DSC03297.jpeg)";
});


$('#sst_bg').hover(function(){
    document.body.style.backgroundImage = "url(images/portfolio_img/Beijing/DSC03170.jpeg)";
});


$('#ct_bg').hover(function(){
    document.body.style.backgroundImage = "url(images/portfolio_img/Glasgow/DSC02952.jpeg)";
});


$('#ph_bg').hover(function(){
    document.body.style.backgroundImage = "url(images/portfolio_img/Glasgow/DSC02960.jpeg)";
});


$('#dfs_bg').hover(function(){
    document.body.style.backgroundImage = "url(images/portfolio_img/Beijing/DSC03295.jpeg)";
});
