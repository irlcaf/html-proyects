let TIME_LIMIT = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;
let isBreak = false;

let formatTime = (timeLeft) =>{
    const minutes = Math.floor(timeLeft/60);

    let seconds = timeLeft%60;

    if(seconds < 10){
        seconds = `0${seconds}`
    }

    return `${minutes}:${seconds}`;
};

function interval(){
    let timePassed = 0;
    let time = isBreak ? TIME_LIMIT : TIME_LIMIT*0.2;
    isBreak ? document.getElementById("session").innerHTML = "FOCUS SESSION" : document.getElementById("session").innerHTML = "BREAK SESSION";
    timerInterval = setInterval(() => {
        timePassed = timePassed +1;
        timeLeft = time - timePassed;
        document.getElementById("clock").innerHTML = formatTime(timeLeft);

        if(timeLeft === 0){
            isBreak = !isBreak;
            finishInterval();
        }
    }, 1000)
};

let finishInterval = () => {
    clearInterval(timerInterval);
}
let initSession = (e) => {
    TIME_LIMIT = document.getElementById("quantity").value*10;
    finishInterval(timerInterval);
    interval();

};

let input = document.querySelector('input');
(updateTitle)();

function contSession(event){
    interval();
}

function updateTitle(){
    isBreak ? document.getElementById("session").innerHTML = "FOCUS SESSION" : document.getElementById("session").innerHTML = "BREAK SESSION";
    let input = document.getElementById("quantity").value*60;
    document.getElementById("clock").innerHTML = formatTime(input);
}

input.addEventListener('change', updateTitle);





