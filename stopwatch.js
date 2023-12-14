/* access all the required elements */
let updateSec = document.getElementsByClassName("seconds")[0];
let updateMin = document.getElementsByClassName("minutes")[0];
let updateHour = document.getElementsByClassName("hours")[0];

let startBtn = document.getElementsByClassName("start")[0];
let stopBtn = document.getElementsByClassName("stop")[0];
let resetBtn = document.getElementsByClassName("reset")[0];

let dayComplete = document.getElementsByClassName("day-complete")[0];

/* variables required for functioning of stopwatch */
let timeInterval;
let hours = 0;
let minutes = 0;
let seconds = 0;

/* Provide functioning to buttons for stopwatch functioning*/
startBtn.addEventListener("click", () => {
	timeInterval = setInterval(startTimer, 1000);

	// Disabling the start button
	startBtn.disabled = true;
	startBtn.classList.add("disabled");
});

stopBtn.addEventListener("click", () => {
	clearInterval(timeInterval);

	// Enabling the start button to let user start the stopwatch again
	startBtn.disabled = false;
	startBtn.classList.remove("disabled");
});

resetBtn.addEventListener("click", () => {
	// reseting the time and interval
	resetTime();

	// hiding dayComplete message if stopwatch is reset
	dayComplete.classList.add("hidden");

	// Enabling the start button to let user start the stopwatch again
	startBtn.disabled = false;
	startBtn.classList.remove("disabled");
});

// this function will update seconds, minutes and hours on the screen
function renderField(fieldHtml, fieldValue) {
	if (fieldValue <= 9) {
		fieldHtml.innerHTML = "0" + fieldValue;
	}

	if (fieldValue > 9) {
		fieldHtml.innerHTML = fieldValue;
	}
}

/* Stopwatch function definining */
function startTimer() {
	seconds++;

	if (seconds > 59) {
		seconds = 0;
		minutes++;
	}

	if (minutes > 59) {
		seconds = 0;
		minutes = 0;
		hours++;
	}

	// calling the function to update seconds, minutes and hours
	renderField(updateSec, seconds);
	renderField(updateMin, minutes);
	renderField(updateHour, hours);

	// Showing day complete message
	if (hours > 23) {
		clearInterval(timeInterval);
		dayComplete.classList.remove("hidden");
	}
}

// reset will clear the time in stopwatch and renderField will update the time in stopwatch after resetting
function resetTime() {
	clearInterval(timeInterval);
	hours = 0;
	minutes = 0;
	seconds = 0;

	renderField(updateSec, seconds);
	renderField(updateMin, minutes);
	renderField(updateHour, hours);
}
