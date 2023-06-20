let startStopBtn = document.getElementById('start-stop-btn');
let resetBtn = document.getElementById('reset-btn');

let second = 0;
let minute = 0;
let hour = 0;

let leadingSecond = 0;
let leadingMinute = 0;
let leadingHour = 0;

let interval = null;
let isStopped = true;

let play = document.getElementById('play');

function stopWatch() {

    second++;
    if (second / 60 === 1) {
        second = 0;
        minute++;

        if (minute / 60 === 1) {
            minute = 0;
            hour++;
        }
    }
    if (second < 10) {
        leadingSecond = '0' + second;
    } else {
        leadingSecond = second;
    }
    if (minute < 10) {
        leadingMinute = '0' + minute;
    } else {
        leadingMinute = minute;
    }
    if (hour < 10) {
        leadingHour = '0' + hour;
    } else {
        leadingHour = hour;
    }
    var displayTimer = document.getElementById('timer').innerHTML = leadingHour + ' : ' + leadingMinute + ' : ' + leadingSecond;
}

startStopBtn.addEventListener('click', () => {
    play.classList.toggle('fa-play');
    play.classList.toggle('fa-pause');
    if (isStopped) {
        play.setAttribute('id', 'pause');
        interval = window.setInterval(stopWatch, 1000);
        isStopped = false;
    } else {
        play.setAttribute('id', 'play');
        window.clearInterval(interval);
        isStopped = true;
    }
})

resetBtn.addEventListener('click', () => {
    if (!isStopped) {
        window.clearInterval(interval);
    }
    second = 0;
    minute = 0;
    hour = 0;

    document.getElementById('timer').innerHTML = "00 : 00 : 00"
})