﻿
var lava = document.querySelector('.lava');

var i = 0;
var l, r, b;
var kudaIdti;
var a = 0;
var t = 0;
var b = 0;
var sc = 0;
var shag = 10;
var slognost = 20;
var iii = 0;

var vragGranicaTop;

var vragDvigenieInterval;


var vrag = document.getElementById("vrag");

var vragStily = window.getComputedStyle(vrag);

var koordinatavrag = parseInt(vragStily.left);

var koordinatavragTop = parseInt(vragStily.top);


var nogi = document.getElementById("nogi");

var nogiStily = window.getComputedStyle(nogi);

var nogiTop = parseInt(nogiStily.top);


var telo = document.getElementById("telo");

var teloStily = window.getComputedStyle(telo);

var teloTop = parseInt(teloStily.top);


var golova = document.getElementById("golova");

var golovaStily = window.getComputedStyle(golova);

var golovaTop = parseInt(golovaStily.top);

var golovaLeft = parseInt(golovaStily.left);


function f() {
	var kartinka = 'url("img2.png")';
	var gg = lava.style.backgroundImage;

	if (gg == kartinka)
		lava.style.backgroundImage = "none";

	else {
		lava.style.backgroundImage = kartinka;
	}
}

setInterval(f, 100);


var easy = document.getElementById("easy");

var easyStyle = window.getComputedStyle(easy);

var hard = document.getElementById("hard");

var hardStyle = window.getComputedStyle(hard);

easy.addEventListener('click', function () {
	easy.style.borderColor = "#1fff8f";

	hard.style.borderColor = "#0064a5";

	slognost = 70
})

hard.addEventListener('click', function () {
	hard.style.borderColor = "#1fff8f";

	easy.style.borderColor = "#0064a5";

	slognost = 20
})


function granica() {
	if (r < 1) {
		if (koordinatavragTop > 200) {
			a = 270;

			vrag.style.transform = `rotate(${a}deg)`;

			vrag.style.top = koordinatavragTop + 105 + "px";
			koordinatavragTop = koordinatavragTop + 105
		}

		if (koordinatavragTop < -100) {
			a = 90;

			vrag.style.transform = `rotate(${a}deg)`;

			vrag.style.top = koordinatavragTop - 105 + "px";
			koordinatavragTop = koordinatavragTop - 105
		}

		if (koordinatavrag > 500) {
			a = 180;

			vrag.style.transform = `rotate(${a}deg)`;

			vrag.style.left = koordinatavrag + 105 + "px";

			koordinatavrag = koordinatavrag + 105
		}


		if (koordinatavrag < -100) {
			a = 0;

			vrag.style.transform = `rotate(${a}deg)`;

			vrag.style.left = koordinatavrag - 105 + "px";

			koordinatavrag = koordinatavrag - 105
		}

	}

	if (r >= 1) {
		if (koordinatavragTop > 200) {
			vrag.style.top = koordinatavragTop - 5 + "px";

			koordinatavragTop = koordinatavragTop - 5
		}


		if (koordinatavragTop < -100) {
			vrag.style.top = koordinatavragTop + 5 + "px";

			koordinatavragTop = koordinatavragTop + 5
		}


		if (koordinatavrag > 500) {
			vrag.style.left = koordinatavrag - 5 + "px";

			koordinatavrag = koordinatavrag - 5
		}


		if (koordinatavrag < -100) {
			vrag.style.left = koordinatavrag + 5 + "px";

			koordinatavrag = koordinatavrag + 5
		}

	}


	r = r + 1


}


function jd() {

	var gameover = document.getElementById("gameover");

	var stilygameover = window.getComputedStyle(gameover);

	var ObektWarlok = document.getElementById("Warlok");

	var KoordinataWarloka = window.getComputedStyle(ObektWarlok);

	var left2 = parseInt(KoordinataWarloka.left);

	var tops2 = parseInt(KoordinataWarloka.top);


	if (a == 0 || a == 360 || a == -360) {

		if (left2 >= (koordinatavrag - 30) && left2 <= (koordinatavrag + 110) && tops2 >= koordinatavragTop && tops2 <= (koordinatavragTop + 60))

		{
			ObektWarlok.style.backgroundColor = "black";
			gameover.style.opacity = 1;
			document.removeEventListener("keydown", DvizenieWarloka)
		}
	}


	if (a == 90 || a == -270) {

		if ((left2 + 10) >= (koordinatavrag - 30) && left2 <= (koordinatavrag + 10) && (tops2 - 20) >= koordinatavragTop && tops2 <= (koordinatavragTop + 160))

		{
			ObektWarlok.style.backgroundColor = "black";
			gameover.style.opacity = 1;
			document.removeEventListener("keydown", DvizenieWarloka)
		}
	}


	if (a == 180 || a == -180) {

		if (left2 >= (koordinatavrag - 150) && left2 <= (koordinatavrag) && tops2 >= koordinatavragTop && tops2 <= (koordinatavragTop + 60))

		{
			ObektWarlok.style.backgroundColor = "black";
			gameover.style.opacity = 1;
			document.removeEventListener("keydown", DvizenieWarloka)
		}
	}


	if (a == 270 || a == -90) {

		if ((left2 + 10) >= (koordinatavrag - 30) && left2 <= (koordinatavrag + 10) && (tops2) >= (koordinatavragTop - 100) && tops2 <= (koordinatavragTop + 40))

		{
			ObektWarlok.style.backgroundColor = "black";
			gameover.style.opacity = 1;
			document.removeEventListener("keydown", DvizenieWarloka)
		}
	}


	if (koordinatavragTop > 200 || koordinatavragTop < -100 || koordinatavrag > 500 || koordinatavrag < -100) granica();

	else {

		if (i < 1) dvigenieVraga();

		if (i >= 1) {
			if (a == 90 || a == -270) {
				vrag.style.top = koordinatavragTop + 5 + "px";

				koordinatavragTop = koordinatavragTop + 5
			}

			if (a == 180 || a == -180) {
				vrag.style.left = koordinatavrag - 5 + "px";

				koordinatavrag = koordinatavrag - 5
			}

			if (a == 270 || a == -90) {
				vrag.style.top = koordinatavragTop - 5 + "px";

				koordinatavragTop = koordinatavragTop - 5
			}

			if (a == 360 || a == -360 || a == 0) {
				vrag.style.left = koordinatavrag + 5 + "px";

				koordinatavrag = koordinatavrag + 5
			}

		}


		i = i + 1;
		if (i >= 6) {
			clearInterval(vragDvigenieInterval);

			rand()
		}

	}

}


function dvigenieVraga() {
	t = a;

	a = a + 90;

	vrag.style.transform = `rotate(${a}deg)`;


	if (t == 90 || t == -270) {
		vrag.style.top = koordinatavragTop + 105 + "px";
		koordinatavragTop = koordinatavragTop + 105
	}


	if (t == 180 || t == -180) {
		vrag.style.left = koordinatavrag - 105 + "px";
		koordinatavrag = koordinatavrag - 105
	}


	if (t == 270 || t == -90) {
		vrag.style.top = koordinatavragTop - 105 + "px";
		koordinatavragTop = koordinatavragTop - 105
	}


	if (t == 360 || t == -360 || t == 0) {
		vrag.style.left = koordinatavrag + 105 + "px";
		koordinatavrag = koordinatavrag + 105
	}

}


function dvigenieVraga2() {
	t = a;

	a = a - 90;

	vrag.style.transform = `rotate(${a}deg)`


	if (t == 90 || t == -270) {
		vrag.style.top = koordinatavragTop + 105 + "px";
		koordinatavragTop = koordinatavragTop + 105
	}


	if (t == 180 || t == -180) {
		vrag.style.left = koordinatavrag - 105 + "px";
		koordinatavrag = koordinatavrag - 105
	}


	if (t == 270 || t == -90) {
		vrag.style.top = koordinatavragTop - 105 + "px";
		koordinatavragTop = koordinatavragTop - 105
	}


	if (t == 360 || t == -360 || t == 0) {
		vrag.style.left = koordinatavrag + 105 + "px";
		koordinatavrag = koordinatavrag + 105
	}

}


function jp() {

	var gameover = document.getElementById("gameover");

	var stilygameover = window.getComputedStyle(gameover);

	var ObektWarlok = document.getElementById("Warlok");

	var KoordinataWarloka = window.getComputedStyle(ObektWarlok);

	var left2 = parseInt(KoordinataWarloka.left);

	var tops2 = parseInt(KoordinataWarloka.top);


	if (a == 0 || a == 360 || a == -360) {

		if (left2 >= (koordinatavrag - 30) && left2 <= (koordinatavrag + 110) && tops2 >= koordinatavragTop && tops2 <= (koordinatavragTop + 60))

		{
			ObektWarlok.style.backgroundColor = "black";
			gameover.style.opacity = 1;
			document.removeEventListener("keydown", DvizenieWarloka)
		}
	}


	if (a == 90 || a == -270) {

		if ((left2 + 10) >= (koordinatavrag - 30) && left2 <= (koordinatavrag + 10) && (tops2 - 20) >= koordinatavragTop && tops2 <= (koordinatavragTop + 160))

		{
			ObektWarlok.style.backgroundColor = "black";
			gameover.style.opacity = 1;
			document.removeEventListener("keydown", DvizenieWarloka)
		}
	}


	if (a == 180 || a == -180) {

		if (left2 >= (koordinatavrag - 150) && left2 <= (koordinatavrag) && tops2 >= koordinatavragTop && tops2 <= (koordinatavragTop + 60))

		{
			ObektWarlok.style.backgroundColor = "black";
			gameover.style.opacity = 1;
			document.removeEventListener("keydown", DvizenieWarloka)
		}
	}


	if (a == 270 || a == -90) {

		if ((left2 + 10) >= (koordinatavrag - 30) && left2 <= (koordinatavrag + 10) && (tops2) >= (koordinatavragTop - 100) && tops2 <= (koordinatavragTop + 40))

		{
			ObektWarlok.style.backgroundColor = "black";
			gameover.style.opacity = 1;
			document.removeEventListener("keydown", DvizenieWarloka)
		}
	}


	if (koordinatavragTop > 200 || koordinatavragTop < -100 || koordinatavrag > 500 || koordinatavrag < -100) granica();

	else {

		if (a == 90 || a == -270) {
			vrag.style.top = koordinatavragTop + 5 + "px";

			koordinatavragTop = koordinatavragTop + 5
		}

		if (a == 180 || a == -180) {
			vrag.style.left = koordinatavrag - 5 + "px";

			koordinatavrag = koordinatavrag - 5
		}

		if (a == 270 || a == -90) {
			vrag.style.top = koordinatavragTop - 5 + "px";

			koordinatavragTop = koordinatavragTop - 5
		}

		if (a == 360 || a == -360 || a == 0) {
			vrag.style.left = koordinatavrag + 5 + "px";

			koordinatavrag = koordinatavrag + 5
		}

		i = i + 1;
		if (i >= 5) {
			clearInterval(vragDvigenieInterval);

			rand()
		}
	}


}


function jl() {

	var gameover = document.getElementById("gameover");

	var stilygameover = window.getComputedStyle(gameover);

	var ObektWarlok = document.getElementById("Warlok");

	var KoordinataWarloka = window.getComputedStyle(ObektWarlok);

	var left2 = parseInt(KoordinataWarloka.left);

	var tops2 = parseInt(KoordinataWarloka.top);


	if (a == 0 || a == 360 || a == -360) {

		if (left2 >= (koordinatavrag - 30) && left2 <= (koordinatavrag + 110) && tops2 >= koordinatavragTop && tops2 <= (koordinatavragTop + 60))

		{
			ObektWarlok.style.backgroundColor = "black";
			gameover.style.opacity = 1;
			document.removeEventListener("keydown", DvizenieWarloka)
		}
	}


	if (a == 90 || a == -270) {

		if ((left2 + 10) >= (koordinatavrag - 30) && left2 <= (koordinatavrag + 10) && (tops2 - 20) >= koordinatavragTop && tops2 <= (koordinatavragTop + 160))

		{
			ObektWarlok.style.backgroundColor = "black";
			gameover.style.opacity = 1;
			document.removeEventListener("keydown", DvizenieWarloka)
		}
	}


	if (a == 180 || a == -180) {

		if (left2 >= (koordinatavrag - 150) && left2 <= (koordinatavrag) && tops2 >= koordinatavragTop && tops2 <= (koordinatavragTop + 60))

		{
			ObektWarlok.style.backgroundColor = "black";
			gameover.style.opacity = 1;
			document.removeEventListener("keydown", DvizenieWarloka)
		}
	}


	if (a == 270 || a == -90) {

		if ((left2 + 10) >= (koordinatavrag - 30) && left2 <= (koordinatavrag + 10) && (tops2) >= (koordinatavragTop - 100) && tops2 <= (koordinatavragTop + 40))

		{
			ObektWarlok.style.backgroundColor = "black";
			gameover.style.opacity = 1;
			document.removeEventListener("keydown", DvizenieWarloka)
		}
	}


	if (koordinatavragTop > 200 || koordinatavragTop < -100 || koordinatavrag > 500 || koordinatavrag < -100) granica();

	else {

		if (i < 1) dvigenieVraga2();

		if (i >= 1) {
			if (a == 90 || a == -270) {
				vrag.style.top = koordinatavragTop + 5 + "px";

				koordinatavragTop = koordinatavragTop + 5
			}

			if (a == 180 || a == -180) {
				vrag.style.left = koordinatavrag - 5 + "px";

				koordinatavrag = koordinatavrag - 5
			}

			if (a == 270 || a == -90) {
				vrag.style.top = koordinatavragTop - 5 + "px";

				koordinatavragTop = koordinatavragTop - 5
			}

			if (a == 360 || a == -360 || a == 0) {
				vrag.style.left = koordinatavrag + 5 + "px";

				koordinatavrag = koordinatavrag + 5
			}

		}
		i = i + 1;
		if (i >= 6) {
			clearInterval(vragDvigenieInterval);

			rand()
		}

	}

}


rand();

function rand() {
	i = 0;

	r = 0;


	if (a >= 360 || a <= -360) a = 0;

	kudaIdti = Math.random();


	if (kudaIdti > 0 && kudaIdti <= 0.3) {
		vragDvigenieInterval = setInterval(jd, slognost)
	}

	if (kudaIdti > 0.3 && kudaIdti <= 0.7) {
		vragDvigenieInterval = setInterval(jp, slognost)
	}

	if (kudaIdti > 0.7 && kudaIdti <= 1) {
		vragDvigenieInterval = setInterval(jl, slognost)
	}

}


function DvizenieWarloka(e) {

	var gameover = document.getElementById("gameover");

	var stilygameover = window.getComputedStyle(gameover);


	var ObektWarlok = document.getElementById("Warlok");

	var KoordinataWarloka = window.getComputedStyle(ObektWarlok);


	var left = parseInt(KoordinataWarloka.left);

	var tops = parseInt(KoordinataWarloka.top);


	switch (e.keyCode) {

		case 37:
			if (left > (-(document.documentElement.clientWidth / 2 - 300)))

				ObektWarlok.style.left = left - shag + "px";

			left = left - shag;


			if (left <= 200 && -tops >= left * 0.5 + 10) {
				ObektWarlok.style.backgroundColor = "black";
				gameover.style.opacity = 1;
				document.removeEventListener("keydown", DvizenieWarloka)
			};


			if (left > 200 && (-tops >= (left - 200) * (-0.5) + 100)) {
				ObektWarlok.style.backgroundColor = "black";
				gameover.style.opacity = 1;
				document.removeEventListener("keydown", DvizenieWarloka)
			};


			if (left <= 200 && tops >= left * 0.5 + 200) {
				ObektWarlok.style.backgroundColor = "black";
				gameover.style.opacity = 1;
				document.removeEventListener("keydown", DvizenieWarloka)
			};


			if (left > 200 && tops >= ((left - 200) * (-0.5) + 100 + 190)) {
				ObektWarlok.style.backgroundColor = "black";
				gameover.style.opacity = 1;
				document.removeEventListener("keydown", DvizenieWarloka)
			};


			if (left > 370 || left < -5) {
				ObektWarlok.style.backgroundColor = "black";
				gameover.style.opacity = 1;
				document.removeEventListener("keydown", DvizenieWarloka)
			};


			break;

		case 38:
			if (tops > (-(document.documentElement.clientHeight / 2 - 100)))

				ObektWarlok.style.top = tops - shag + "px";

			tops = tops - shag;


			if (left <= 200 && -tops >= left * 0.5 + 10) {
				ObektWarlok.style.backgroundColor = "black";
				gameover.style.opacity = 1;
				document.removeEventListener("keydown", DvizenieWarloka)
			};


			if (left > 200 && (-tops >= (left - 200) * (-0.5) + 100)) {
				ObektWarlok.style.backgroundColor = "black";
				gameover.style.opacity = 1;
				document.removeEventListener("keydown", DvizenieWarloka)
			};


			if (left <= 200 && tops >= left * 0.5 + 200) {
				ObektWarlok.style.backgroundColor = "black";
				gameover.style.opacity = 1;
				document.removeEventListener("keydown", DvizenieWarloka)
			};


			if (left > 200 && tops >= ((left - 200) * (-0.5) + 100 + 190)) {
				ObektWarlok.style.backgroundColor = "black";
				gameover.style.opacity = 1;
				document.removeEventListener("keydown", DvizenieWarloka)
			};


			if (left > 370 || left < -5) {
				ObektWarlok.style.backgroundColor = "black";
				gameover.style.opacity = 1;
				document.removeEventListener("keydown", DvizenieWarloka)
			};


			break;
		case 39:
			if (left < (document.documentElement.clientWidth / 2) + 100)
				ObektWarlok.style.left = left + shag + "px";

			left = left + shag;


			if (left <= 200 && -tops >= left * 0.5 + 10) {
				ObektWarlok.style.backgroundColor = "black";
				gameover.style.opacity = 1;
				document.removeEventListener("keydown", DvizenieWarloka)
			};


			if (left > 200 && (-tops >= (left - 200) * (-0.5) + 100)) {
				ObektWarlok.style.backgroundColor = "black";
				gameover.style.opacity = 1;
				document.removeEventListener("keydown", DvizenieWarloka)
			};


			if (left <= 200 && tops >= left * 0.5 + 200) {
				ObektWarlok.style.backgroundColor = "black";
				gameover.style.opacity = 1;
				document.removeEventListener("keydown", DvizenieWarloka)
			};


			if (left > 200 && tops >= ((left - 200) * (-0.5) + 100 + 190)) {
				ObektWarlok.style.backgroundColor = "black";
				gameover.style.opacity = 1;
				document.removeEventListener("keydown", DvizenieWarloka)
			};


			if (left > 370 || left < -5) {
				ObektWarlok.style.backgroundColor = "black";
				gameover.style.opacity = 1;
				document.removeEventListener("keydown", DvizenieWarloka)
			};


			break;
		case 40:
			if (tops < (document.documentElement.clientHeight / 2 + 70))
				ObektWarlok.style.top = tops + shag + "px";

			tops = tops + shag;


			if (left <= 200 && -tops >= left * 0.5 + 10) {
				ObektWarlok.style.backgroundColor = "black";
				gameover.style.opacity = 1;
				document.removeEventListener("keydown", DvizenieWarloka)
			};


			if (left > 200 && (-tops >= (left - 200) * (-0.5) + 100)) {
				ObektWarlok.style.backgroundColor = "black";
				gameover.style.opacity = 1;
				document.removeEventListener("keydown", DvizenieWarloka)
			};


			if (left <= 200 && tops >= left * 0.5 + 200) {
				ObektWarlok.style.backgroundColor = "black";
				gameover.style.opacity = 1;
				document.removeEventListener("keydown", DvizenieWarloka)
			};


			if (left > 200 && tops >= ((left - 200) * (-0.5) + 100 + 190)) {
				ObektWarlok.style.backgroundColor = "black";
				gameover.style.opacity = 1;
				document.removeEventListener("keydown", DvizenieWarloka)
			};


			if (left > 370 || left < -5) {
				ObektWarlok.style.backgroundColor = "black";
				gameover.style.opacity = 1;
				document.removeEventListener("keydown", DvizenieWarloka)
			};


			break;


	}
}

document.addEventListener("keydown", DvizenieWarloka);


function score() {

	var score = document.getElementById("score");

	var ObektWarlok = document.getElementById("Warlok");

	var KoordinataWarloka = window.getComputedStyle(ObektWarlok);

	var titri = document.getElementById("titri");

	var titriStyle = window.getComputedStyle(titri);

	var gameover = document.getElementById("gameover");

	var stilygameover = window.getComputedStyle(gameover);

	var titriName = document.getElementById("titriName");

	var titriNameStyle = window.getComputedStyle(titriName);


	var konsultanti = document.getElementById("konsultanti");

	var konsultantiStyle = window.getComputedStyle(konsultanti);

	var konsultantiName = document.getElementById("konsultantiName");

	var konsultantiNameStyle = window.getComputedStyle(konsultantiName);


	console.log(r);


	score.innerHTML = `score ${sc}/2000`;

	if (ObektWarlok.style.backgroundColor != "black") sc = sc + 10;


	if (sc >= 2000) {
		sc = 2000;


		document.removeEventListener("keydown", DvizenieWarloka);

		gameover.style.zIndex = 0;

		titri.style.zIndex = 2001;


		if (iii < 11) {
			titri.style.opacity = iii / 10
		}

		if (iii == 11) {
			titriName.style.opacity = 1
		}

		if (iii == 14) {
			konsultanti.style.opacity = 1;

			konsultantiName.style.opacity = 1
		}

		if (iii >= 15) {
			clearInterval(scoreInterval)
		}

		iii = iii + 1

	}

}


var scoreInterval = setInterval(score, 500);