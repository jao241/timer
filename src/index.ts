// const timer = setInterval(()=>{
//     console.log(new Date().toLocaleDateString("pt-BR",  {    
//         hour:"numeric",
//         minute: "numeric",
//         second: "numeric",
//     }));
// }, 1000);

// setTimeout(()=>{
//     clearInterval(timer);
// }, 10000);

class Timer{
    private _timer;
    private x = 0;
    
    initTimer(){
        this.timer();
    }
    
    stopTimer(){
        clearInterval(this._timer);      
        console.log("Time stoped!"); 
    }

    resetTimer(){
        this.x = 0;
        this.stopTimer();
    }
    
    private timer(){        
        this._timer = setInterval(()=>{
            console.log(++this.x);
        }, 1000);   
    }    
}

const timer = new Timer();
timer.initTimer();
setTimeout(()=>{
    timer.resetTimer();
}, 5000);

setTimeout(()=>{
    timer.initTimer();
}, 6000);