﻿
var drift = document.querySelector('.drift');

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

var enemyGranicaTop;

var enemyDvigenieInterval;


var enemy = document.getElementById("enemy");

var enemyStily = window.getComputedStyle(enemy);

var koordinataenemy = parseInt(enemyStily.left);

var koordinataenemyTop = parseInt(enemyStily.top);


var
legs = document.getElementById("legs");

var
legsStily = window.getComputedStyle(legs);

var
legsTop = parseInt(
legsStily.top);


var corpus = document.getElementById("corpus");

var corpusStily = window.getComputedStyle(corpus);

var corpusTop = parseInt(corpusStily.top);


var brain = document.getElementById("brain");

var brainStily = window.getComputedStyle(brain);

var brainTop = parseInt(brainStily.top);

var brainLeft = parseInt(brainStily.left);


function f() {
	var kartinka = 'url("img2.png")';
	var gg = drift.style.backgroundImage;

	if (gg == kartinka)
		drift.style.backgroundImage = "none";

	else {
		drift.style.backgroundImage = kartinka;
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
		if (koordinataenemyTop > 200) {
			a = 270;

			enemy.style.transform = `rotate(${a}deg)`;

			enemy.style.top = koordinataenemyTop + 105 + "px";
			koordinataenemyTop = koordinataenemyTop + 105
		}

		if (koordinataenemyTop < -100) {
			a = 90;

			enemy.style.transform = `rotate(${a}deg)`;

			enemy.style.top = koordinataenemyTop - 105 + "px";
			koordinataenemyTop = koordinataenemyTop - 105
		}

		if (koordinataenemy > 500) {
			a = 180;

			enemy.style.transform = `rotate(${a}deg)`;

			enemy.style.left = koordinataenemy + 105 + "px";

			koordinataenemy = koordinataenemy + 105
		}


		if (koordinataenemy < -100) {
			a = 0;

			enemy.style.transform = `rotate(${a}deg)`;

			enemy.style.left = koordinataenemy - 105 + "px";

			koordinataenemy = koordinataenemy - 105
		}

	}

	if (r >= 1) {
		if (koordinataenemyTop > 200) {
			enemy.style.top = koordinataenemyTop - 5 + "px";

			koordinataenemyTop = koordinataenemyTop - 5
		}


		if (koordinataenemyTop < -100) {
			enemy.style.top = koordinataenemyTop + 5 + "px";

			koordinataenemyTop = koordinataenemyTop + 5
		}


		if (koordinataenemy > 500) {
			enemy.style.left = koordinataenemy - 5 + "px";

			koordinataenemy = koordinataenemy - 5
		}


		if (koordinataenemy < -100) {
			enemy.style.left = koordinataenemy + 5 + "px";

			koordinataenemy = koordinataenemy + 5
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

		if (left2 >= (koordinataenemy - 30) && left2 <= (koordinataenemy + 110) && tops2 >= koordinataenemyTop && tops2 <= (koordinataenemyTop + 60))

		{
			ObektWarlok.style.backgroundColor = "black";
			gameover.style.opacity = 1;
			document.removeEventListener("keydown", DvizenieWarloka)
		}
	}


	if (a == 90 || a == -270) {

		if ((left2 + 10) >= (koordinataenemy - 30) && left2 <= (koordinataenemy + 10) && (tops2 - 20) >= koordinataenemyTop && tops2 <= (koordinataenemyTop + 160))

		{
			ObektWarlok.style.backgroundColor = "black";
			gameover.style.opacity = 1;
			document.removeEventListener("keydown", DvizenieWarloka)
		}
	}


	if (a == 180 || a == -180) {

		if (left2 >= (koordinataenemy - 150) && left2 <= (koordinataenemy) && tops2 >= koordinataenemyTop && tops2 <= (koordinataenemyTop + 60))

		{
			ObektWarlok.style.backgroundColor = "black";
			gameover.style.opacity = 1;
			document.removeEventListener("keydown", DvizenieWarloka)
		}
	}


	if (a == 270 || a == -90) {

		if ((left2 + 10) >= (koordinataenemy - 30) && left2 <= (koordinataenemy + 10) && (tops2) >= (koordinataenemyTop - 100) && tops2 <= (koordinataenemyTop + 40))

		{
			ObektWarlok.style.backgroundColor = "black";
			gameover.style.opacity = 1;
			document.removeEventListener("keydown", DvizenieWarloka)
		}
	}


	if (koordinataenemyTop > 200 || koordinataenemyTop < -100 || koordinataenemy > 500 || koordinataenemy < -100) granica();

	else {

		if (i < 1) dvigenieenemya();

		if (i >= 1) {
			if (a == 90 || a == -270) {
				enemy.style.top = koordinataenemyTop + 5 + "px";

				koordinataenemyTop = koordinataenemyTop + 5
			}

			if (a == 180 || a == -180) {
				enemy.style.left = koordinataenemy - 5 + "px";

				koordinataenemy = koordinataenemy - 5
			}

			if (a == 270 || a == -90) {
				enemy.style.top = koordinataenemyTop - 5 + "px";

				koordinataenemyTop = koordinataenemyTop - 5
			}

			if (a == 360 || a == -360 || a == 0) {
				enemy.style.left = koordinataenemy + 5 + "px";

				koordinataenemy = koordinataenemy + 5
			}

		}


		i = i + 1;
		if (i >= 6) {
			clearInterval(enemyDvigenieInterval);

			rand()
		}

	}

}


function dvigenieenemya() {
	t = a;

	a = a + 90;

	enemy.style.transform = `rotate(${a}deg)`;


	if (t == 90 || t == -270) {
		enemy.style.top = koordinataenemyTop + 105 + "px";
		koordinataenemyTop = koordinataenemyTop + 105
	}


	if (t == 180 || t == -180) {
		enemy.style.left = koordinataenemy - 105 + "px";
		koordinataenemy = koordinataenemy - 105
	}


	if (t == 270 || t == -90) {
		enemy.style.top = koordinataenemyTop - 105 + "px";
		koordinataenemyTop = koordinataenemyTop - 105
	}


	if (t == 360 || t == -360 || t == 0) {
		enemy.style.left = koordinataenemy + 105 + "px";
		koordinataenemy = koordinataenemy + 105
	}

}


function dvigenieenemya2() {
	t = a;

	a = a - 90;

	enemy.style.transform = `rotate(${a}deg)`


	if (t == 90 || t == -270) {
		enemy.style.top = koordinataenemyTop + 105 + "px";
		koordinataenemyTop = koordinataenemyTop + 105
	}


	if (t == 180 || t == -180) {
		enemy.style.left = koordinataenemy - 105 + "px";
		koordinataenemy = koordinataenemy - 105
	}


	if (t == 270 || t == -90) {
		enemy.style.top = koordinataenemyTop - 105 + "px";
		koordinataenemyTop = koordinataenemyTop - 105
	}


	if (t == 360 || t == -360 || t == 0) {
		enemy.style.left = koordinataenemy + 105 + "px";
		koordinataenemy = koordinataenemy + 105
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

		if (left2 >= (koordinataenemy - 30) && left2 <= (koordinataenemy + 110) && tops2 >= koordinataenemyTop && tops2 <= (koordinataenemyTop + 60))

		{
			ObektWarlok.style.backgroundColor = "black";
			gameover.style.opacity = 1;
			document.removeEventListener("keydown", DvizenieWarloka)
		}
	}


	if (a == 90 || a == -270) {

		if ((left2 + 10) >= (koordinataenemy - 30) && left2 <= (koordinataenemy + 10) && (tops2 - 20) >= koordinataenemyTop && tops2 <= (koordinataenemyTop + 160))

		{
			ObektWarlok.style.backgroundColor = "black";
			gameover.style.opacity = 1;
			document.removeEventListener("keydown", DvizenieWarloka)
		}
	}


	if (a == 180 || a == -180) {

		if (left2 >= (koordinataenemy - 150) && left2 <= (koordinataenemy) && tops2 >= koordinataenemyTop && tops2 <= (koordinataenemyTop + 60))

		{
			ObektWarlok.style.backgroundColor = "black";
			gameover.style.opacity = 1;
			document.removeEventListener("keydown", DvizenieWarloka)
		}
	}


	if (a == 270 || a == -90) {

		if ((left2 + 10) >= (koordinataenemy - 30) && left2 <= (koordinataenemy + 10) && (tops2) >= (koordinataenemyTop - 100) && tops2 <= (koordinataenemyTop + 40))

		{
			ObektWarlok.style.backgroundColor = "black";
			gameover.style.opacity = 1;
			document.removeEventListener("keydown", DvizenieWarloka)
		}
	}


	if (koordinataenemyTop > 200 || koordinataenemyTop < -100 || koordinataenemy > 500 || koordinataenemy < -100) granica();

	else {

		if (a == 90 || a == -270) {
			enemy.style.top = koordinataenemyTop + 5 + "px";

			koordinataenemyTop = koordinataenemyTop + 5
		}

		if (a == 180 || a == -180) {
			enemy.style.left = koordinataenemy - 5 + "px";

			koordinataenemy = koordinataenemy - 5
		}

		if (a == 270 || a == -90) {
			enemy.style.top = koordinataenemyTop - 5 + "px";

			koordinataenemyTop = koordinataenemyTop - 5
		}

		if (a == 360 || a == -360 || a == 0) {
			enemy.style.left = koordinataenemy + 5 + "px";

			koordinataenemy = koordinataenemy + 5
		}

		i = i + 1;
		if (i >= 5) {
			clearInterval(enemyDvigenieInterval);

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

		if (left2 >= (koordinataenemy - 30) && left2 <= (koordinataenemy + 110) && tops2 >= koordinataenemyTop && tops2 <= (koordinataenemyTop + 60))

		{
			ObektWarlok.style.backgroundColor = "black";
			gameover.style.opacity = 1;
			document.removeEventListener("keydown", DvizenieWarloka)
		}
	}


	if (a == 90 || a == -270) {

		if ((left2 + 10) >= (koordinataenemy - 30) && left2 <= (koordinataenemy + 10) && (tops2 - 20) >= koordinataenemyTop && tops2 <= (koordinataenemyTop + 160))

		{
			ObektWarlok.style.backgroundColor = "black";
			gameover.style.opacity = 1;
			document.removeEventListener("keydown", DvizenieWarloka)
		}
	}


	if (a == 180 || a == -180) {

		if (left2 >= (koordinataenemy - 150) && left2 <= (koordinataenemy) && tops2 >= koordinataenemyTop && tops2 <= (koordinataenemyTop + 60))

		{
			ObektWarlok.style.backgroundColor = "black";
			gameover.style.opacity = 1;
			document.removeEventListener("keydown", DvizenieWarloka)
		}
	}


	if (a == 270 || a == -90) {

		if ((left2 + 10) >= (koordinataenemy - 30) && left2 <= (koordinataenemy + 10) && (tops2) >= (koordinataenemyTop - 100) && tops2 <= (koordinataenemyTop + 40))

		{
			ObektWarlok.style.backgroundColor = "black";
			gameover.style.opacity = 1;
			document.removeEventListener("keydown", DvizenieWarloka)
		}
	}


	if (koordinataenemyTop > 200 || koordinataenemyTop < -100 || koordinataenemy > 500 || koordinataenemy < -100) granica();

	else {

		if (i < 1) dvigenieenemya2();

		if (i >= 1) {
			if (a == 90 || a == -270) {
				enemy.style.top = koordinataenemyTop + 5 + "px";

				koordinataenemyTop = koordinataenemyTop + 5
			}

			if (a == 180 || a == -180) {
				enemy.style.left = koordinataenemy - 5 + "px";

				koordinataenemy = koordinataenemy - 5
			}

			if (a == 270 || a == -90) {
				enemy.style.top = koordinataenemyTop - 5 + "px";

				koordinataenemyTop = koordinataenemyTop - 5
			}

			if (a == 360 || a == -360 || a == 0) {
				enemy.style.left = koordinataenemy + 5 + "px";

				koordinataenemy = koordinataenemy + 5
			}

		}
		i = i + 1;
		if (i >= 6) {
			clearInterval(enemyDvigenieInterval);

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
		enemyDvigenieInterval = setInterval(jd, slognost)
	}

	if (kudaIdti > 0.3 && kudaIdti <= 0.7) {
		enemyDvigenieInterval = setInterval(jp, slognost)
	}

	if (kudaIdti > 0.7 && kudaIdti <= 1) {
		enemyDvigenieInterval = setInterval(jl, slognost)
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

	var captions = document.getElementById("captions");

	var captionsStyle = window.getComputedStyle(captions);

	var gameover = document.getElementById("gameover");

	var stilygameover = window.getComputedStyle(gameover);

	var captionsName = document.getElementById("captionsName");

	var captionsNameStyle = window.getComputedStyle(captionsName);


	var adviser = document.getElementById("adviser");

	var adviserStyle = window.getComputedStyle(adviser);

	var adviserName = document.getElementById("adviserName");

	var adviserNameStyle = window.getComputedStyle(adviserName);


	console.log(r);


	score.innerHTML = `score ${sc}/2000`;

	if (ObektWarlok.style.backgroundColor != "black") sc = sc + 10;


	if (sc >= 2000) {
		sc = 2000;


		document.removeEventListener("keydown", DvizenieWarloka);

		gameover.style.zIndex = 0;

		captions.style.zIndex = 2001;


		if (iii < 11) {
			captions.style.opacity = iii / 10
		}

		if (iii == 11) {
			captionsName.style.opacity = 1
		}

		if (iii == 14) {
			adviser.style.opacity = 1;

			adviserName.style.opacity = 1
		}

		if (iii >= 15) {
			clearInterval(scoreInterval)
		}

		iii = iii + 1

	}

}


var scoreInterval = setInterval(score, 500);