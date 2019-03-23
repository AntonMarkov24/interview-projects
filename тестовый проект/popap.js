var PopapBtn_TrainingCourses = document.getElementById('PopapBtn_TrainingCourses');
var Popap_TrainingCourses = document.getElementById('Popap_TrainingCourses');


PopapBtn_TrainingCourses.addEventListener('click', function() {
var PopapClose = document.querySelector('.PopapOpen');
if (PopapClose !== "undefined" && PopapClose !== null) {PopapClose.classList.remove("PopapOpen")}
if (PopapClose !== Popap_TrainingCourses) {Popap_TrainingCourses.classList.toggle("PopapOpen")}
                                                               })


var PopapBtn_capmuses = document.getElementById('PopapBtn_capmuses');
var Popap_capmuses = document.getElementById('Popap_capmuses');

PopapBtn_capmuses.addEventListener('click', function() {
var PopapClose = document.querySelector('.PopapOpen');
if (PopapClose !== "undefined" && PopapClose !== null) {PopapClose.classList.remove("PopapOpen")}
if (PopapClose !== Popap_capmuses) {Popap_capmuses.classList.toggle("PopapOpen")}
                                                        })


var PopapBtn_directions = document.getElementById('PopapBtn_directions');
var Popap_directions = document.getElementById('Popap_directions');

PopapBtn_directions.addEventListener('click', function() {
var PopapClose = document.querySelector('.PopapOpen');
if (PopapClose !== "undefined" && PopapClose !== null) {PopapClose.classList.remove("PopapOpen")}
if (PopapClose !== Popap_directions) {Popap_directions.classList.toggle("PopapOpen")}
                                                          })


var PopapBtn_specialty = document.getElementById('PopapBtn_specialty');
var Popap_specialty = document.getElementById('Popap_specialty');

PopapBtn_specialty.addEventListener('click', function() {
var PopapClose = document.querySelector('.PopapOpen');
if (PopapClose !== "undefined" && PopapClose !== null) {PopapClose.classList.remove("PopapOpen")}
if (PopapClose !== Popap_specialty) {Popap_specialty.classList.toggle("PopapOpen")}
                                                         })


var PopapBtn_campus = document.getElementById('PopapBtn_campus');
var Popap_campus = document.getElementById('Popap_campus');

PopapBtn_campus.addEventListener('click', function() {
var PopapClose = document.querySelector('.PopapOpen');
if (PopapClose !== "undefined" && PopapClose !== null) {PopapClose.classList.remove("PopapOpen")}
if (PopapClose !== Popap_campus) {Popap_campus.classList.toggle("PopapOpen")}
                                                      })


var PopapBtn_programs = document.getElementById('PopapBtn_programs');
var Popap_programs = document.getElementById('Popap_programs');

PopapBtn_programs.addEventListener('click', function() {
var PopapClose = document.querySelector('.PopapOpen');
if (PopapClose !== "undefined" && PopapClose !== null) {PopapClose.classList.remove("PopapOpen")}
if (PopapClose !== Popap_programs) {Popap_programs.classList.toggle("PopapOpen")}
                                                        })


var PopapBtn_language = document.getElementById('PopapBtn_language');
var Popap_language = document.getElementById('Popap_language');

PopapBtn_language.addEventListener('click', function() {
var PopapClose = document.querySelector('.PopapOpen');
if (PopapClose !== "undefined" && PopapClose !== null) {PopapClose.classList.remove("PopapOpen")}
if (PopapClose !== Popap_language) {Popap_language.classList.toggle("PopapOpen")}
                                                        })


var PopapBtn_SP = document.getElementById('PopapBtn_SP');
var Popap_SP = document.getElementById('Popap_SP');

PopapBtn_SP.addEventListener('click', function() {
var PopapClose = document.querySelector('.PopapOpen');
if (PopapClose !== "undefined" && PopapClose !== null) {PopapClose.classList.remove("PopapOpen")}
if (PopapClose !== Popap_SP) {Popap_SP.classList.toggle("PopapOpen")}
                                                  })



var infRight_icon = document.getElementById('infRight_icon');
var PopapRight_closeBtn = document.getElementById('PopapRight_closeBtn');
var pageMain_PopapRight = document.querySelector('.page-main_PopapRight');

infRight_icon.addEventListener('click', function() {
pageMain_PopapRight.classList.toggle("PopapRight_close")
                                                    })

PopapRight_closeBtn.addEventListener('click', function() {
pageMain_PopapRight.classList.add("PopapRight_close")
                                                    })