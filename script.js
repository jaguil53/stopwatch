let start = document.getElementById("start");
let pause = document.getElementById("stop");
let reset = document.getElementById("reset");

const sec = document.getElementById("sec");
const min = document.getElementById("min");
const hr = document.getElementById("hr");

let hours = '00';
let minutes = '00';
let seconds = '00';
let button;


start.addEventListener('click', startTime);
pause.addEventListener('click', pauseTime);
reset.addEventListener('click',resetTimer);


function startTime() {
    button = true;

    if (button) {
        timer = setInterval(() => {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
                if (minutes === 60) {
                    minutes = 0;
                    hours++;
                }
            }

            document.getElementById("hr").innerHTML = hours.toString().padStart(2, '0');
            document.getElementById("min").innerHTML = minutes.toString().padStart(2, '0');
            document.getElementById("sec").innerHTML = seconds.toString().padStart(2, '0');
        }, 1000); 
    }
}

function pauseTime(){
    button = false;
    if(!button){
        clearInterval(timer);
      document.getElementById("hr").innerHTML = hours.toString().padStart(2, '0');
        document.getElementById("min").innerHTML = minutes.toString().padStart(2, '0');
        document.getElementById("sec").innerHTML = seconds.toString().padStart(2, '0');

    }
}

function resetTimer(){

    timer = false ;
    hours = 0;
    minutes = 0;
    seconds = 0;
    document.getElementById("hr").innerHTML = '00';
    document.getElementById("min").innerHTML = '00';
    document.getElementById("sec").innerHTML = '00';

}