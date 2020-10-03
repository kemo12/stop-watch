
const startTimer=document.querySelector('.start-timer');
startTimer.addEventListener('click',starttimerFunctin);

function starttimerFunctin(){
    var startminuts=document.querySelector('.mintuesInput').value;
    var startseconds=document.querySelector('.secondInput').value; 
    document.querySelector('.timmerInputTab').classList.remove('active');
    document.querySelector('.timmerCounterTab').classList.add('active');
    startTimer.disabled =true;

    
    let time=(startminuts * 60)+(startseconds%60);

setInterval(updateCountTime,1000);
function updateCountTime(){
    if(time!=-1){
    let minutes=Math.floor(time/60);
    let seconds=time % 60;

    time--;
    document.querySelector('.timerMinutes').textContent=minutes;
    document.querySelector('.timerSeconds').textContent=seconds;

}
}

}
