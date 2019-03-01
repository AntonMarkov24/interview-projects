﻿


function zadergka() {
	window.location.href = 'index.html'
}


var start = document.getElementById("start");

var startStyle = window.getComputedStyle(start);

var shell = document.getElementById("shell");

var shellStyle = window.getComputedStyle(shell);


start.addEventListener('click', function loadScript() {

		var zvuk = document.getElementById("zvuk").play();

		start.style.top = -2 + "px";

		start.style.right = 1 + "px";

		shell.style.boxShadow = "none";

		setTimeout(zadergka, 1000)
	}


)


var pause = document.getElementById("pause");

pause.addEventListener('click', function pause() {

	var audio = document.getElementById("audio").pause();
})


var play = document.getElementById("play");

play.addEventListener('click', function play() {

	var audio = document.getElementById("audio").play()
})