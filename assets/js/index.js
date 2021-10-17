const clock = document.querySelector(".relogio");
let seconds = 1;
let timer;

function initTimer(){
    updateTimer();
}

function updateTimer(){
    timer = setInterval(()=>{
        const date = new Date(seconds * 1000);
        seconds++;
        clock.innerHTML = date.toLocaleTimeString("pt-BR",{
            hour12: false,
            timeZone :"UTC",
        });
    }, 1000);
}

function stopTimer(){
    clearInterval(timer);
    alterateTimerColor("red");
}

function alterateTimerColor(color){
    clock.style.color = color;
}

function resetTimer(){
    stopTimer();
    clock.innerHTML = "00:00:00";
    alterateTimerColor("black");
    seconds = 1;
}