const timer = document.getElementById('stopwatch');

let hr = 0;
let min = 0;
let sec = 0;
let stoptime = true;
const quote = document.getElementById('timerTagHeading');

function startTimer() {
  if (stoptime == true) {
        stoptime = false;
        timerCycle();
    }
}
function stopTimer() {
  if (stoptime == false) {
    stoptime = true;
  }
}

function timerCycle() {
    if (stoptime == false) {
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);

    sec = sec + 1;

    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }

    if (sec < 10 || sec == 0) {
      sec = '0' + sec;
    }
    if (min < 10 || min == 0) {
      min = '0' + min;
    }
    if (hr < 10 || hr == 0) {
      hr = '0' + hr;
    }

    timer.innerHTML = hr + ':' + min + ':' + sec;

    setTimeout("timerCycle()", 1000);

    if(hr==0 && min==0 && sec==0)
    {
      quote.textContent='Get Ready to have a Productive Day!';
      quote.style.color='black';
    }

    if(hr==0 && (min>0 || sec>0))
    {
      quote.textContent='Keep Going do not get Distracted!';
      quote.style.color = 'green';
    }

    if(hr>0)
    {
      quote.textContent='You have done Great! You can take a break now.';
      quote.style.color = 'Red';
    }
  }
}

function resetTimer() {
    timer.innerHTML = '00:00:00';
    stoptime = true;
    hr = 0;
    sec = 0;
    min = 0;

    quote.textContent='Get Ready to have a Productive Day!'
    quote.style.color='black';
}

