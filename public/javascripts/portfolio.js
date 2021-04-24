
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
    document.body.style.backgroundImage = "url(images/photodata/img_91.JPG)";
});


$('a').onmouseover(function(){
    document.body.style.backgroundImage = "url(images/photodata/img_91.JPG)";
});


$('#sst_bg').hover(function(){
    document.body.style.backgroundImage = "url(images/photodata/img_46.JPG)";
});


$('#ct_bg').hover(function(){
    document.body.style.backgroundImage = "url(images/photodata/img_76.JPG)";
});


$('#ph_bg').hover(function(){
    document.body.style.backgroundImage = "url(images/photodata/img_60.JPG)";
});


$('#dfs_bg').hover(function(){
    document.body.style.backgroundImage = "url(images/photodata/img_72.JPG)";
});
