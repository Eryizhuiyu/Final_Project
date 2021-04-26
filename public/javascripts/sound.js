
/*jslint devel: true */
/*eslint-env browser*/
/*eslint no-console: 0*/
/*global
alert, confirm, console, promp, $
*/




function playMusic() {
    var audio = document.createElement("audio");
    audio.src = "click.wav";
    audio.play();
}

var b = document.body;
b.onclick = playMusic;

var a = document.getElementsByTagName("a");
console.log(a);
/*play the background music and change the background color when logo is clicked
function playMusic() {
    this.style.background = "antiquewhite";
    var audio = document.createElement("audio");
    audio.src = "river_sound.wav";
    audio.play();
}


var a = document.querySelector('.logo');
console.log(a);
a.onclick = playMusic;
*/

