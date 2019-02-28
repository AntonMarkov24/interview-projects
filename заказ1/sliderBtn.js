var slideBtn = document.getElementById("slide-btn");
var slider21 = document.getElementById("slider2_1");
var slider22 = document.getElementById("slider2_2");
var slider23 = document.getElementById("slider2_3");
var slider24 = document.getElementById("slider2_4");
var slider25 = document.getElementById("slider2_5");

var i;


console.log(`slider` + 2 + `${i}`)


slideBtn.addEventListener('click', goRight);

function goRight() {

	for (i = 1; i <= 5; i++) {

		if (i === 5) {
			slider21.checked = true
		}

		if (eval(`slider` + 2 + `${i}`).checked === true) {
			eval(`slider` + 2 + `${i + 1}`).checked = true;
			return
		}

	}


}