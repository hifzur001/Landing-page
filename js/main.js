var pageTitle = "Online Test";
document.title = pageTitle;

function updateTitle() {
    var isActive = document.visibilityState === "visible";

    var notifications = 1;

    if (notifications > 0 && !isActive) {
        document.title = "(" + notifications + ") Notification";
    } else {
        document.title = pageTitle;
    }
}

setInterval(function () {
    updateTitle();
}, 500);
var countdownTime = 150;

var timer = setInterval(function () {
    var minutes = Math.floor(countdownTime / 60);
    var seconds = countdownTime - (minutes * 60);

    var formattedMinutes = minutes.toString();
    var formattedSeconds = seconds.toString().padStart(2, '0');

    document.getElementById('timer').textContent = formattedMinutes + ' minutes and ' + formattedSeconds + ' seconds';

    countdownTime--;

    if (countdownTime < 0) {
        clearInterval(timer);
        alert('Time is up!');
    }
}, 1000);
var formSubmitted = false;

document.getElementById('myForm').addEventListener('submit', function () {
    formSubmitted = true;
});

window.addEventListener('beforeunload', function (e) {
    if (formSubmitted) {
        return "Are you sure you want to reload or leave this page? You may lose your unsaved changes.";
    }
});

