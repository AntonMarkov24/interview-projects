var PopapBtn = document.getElementById('PopapBtn');
var PopapBtnStyle = window.getComputedStyle(PopapBtn);
var trainingCourses_Popap = document.getElementById('trainingCourses_Popap');
var trainingCourses_PopapStyle = window.getComputedStyle(trainingCourses_Popap);

PopapBtn.addEventListener('click', function() {trainingCourses_Popap.classList.toggle("trainingCourses_PopapOpen");


					   })