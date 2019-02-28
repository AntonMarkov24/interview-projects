﻿
$(function () {

	$("#example_id").ionRangeSlider({
		hide_min_max: true,
		keyboard: true,
		min: 100,
		max: 800,
		from: 100,
		to: 500,
		type: 'double',
		step: 20,
		prefix: "",
		min_interval: 110,
		max_interval: 500,
		to_max: 700,
		grid: false
	});

});