//setting the tab mode 
//in this file i use events of button to swap between stopwatch and timer
const stopWatchButton = document.querySelector(".stopWatchButton");
const timerTabButton=document.querySelector('.timerTabButton');

timerTabButton.addEventListener('click',()=>{
document.querySelector('.timer-tab').classList.add('active');
document.querySelector('.stop-watch-tab').classList.remove('active');
document.querySelector('.timerTabButton').classList.add('active-btn');
document.querySelector('.stopWatchButton').classList.remove('active-btn');
document.querySelector('.timer-buttons-container').classList.add('active');
document.querySelector('.stopwatch-buttons-container').classList.remove('active');
});
stopWatchButton.addEventListener('click',()=>{
    document.querySelector('.stop-watch-tab').classList.add('active');
    document.querySelector('.timer-tab').classList.remove('active');
    document.querySelector('.stopWatchButton').classList.add('active-btn');
    document.querySelector('.timerTabButton').classList.remove('active-btn');
    document.querySelector('.stopwatch-buttons-container').classList.add('active');
document.querySelector('.timer-buttons-container').classList.remove('active');
});
document.querySelector('.start-stopwatch').addEventListener('click',()=>{
    document.querySelector('.stop-stopwatch').classList.remove('displynone');
    document.querySelector('.reset-stopwatch').classList.remove('displynone');
    document.querySelector('.start-stopwatch').classList.add('displynone');
    

});
document.querySelector('.stop-stopwatch').addEventListener('click',()=>{
    document.querySelector('.start-stopwatch').classList.remove('displynone');
    document.querySelector('.reset-stopwatch').classList.remove('displynone');
    document.querySelector('.stop-stopwatch').classList.add('displynone');

});
document.querySelector('.reset-stopwatch').addEventListener('click',()=>{
    document.querySelector('.reset-stopwatch').classList.add('displynone');
    document.querySelector('.stop-stopwatch').classList.add('displynone');
    document.querySelector('.start-stopwatch').classList.remove('displynone');

});
document.querySelector('.timmerCounterTab').addEventListener('click',()=>{
    document.querySelector('.timmerInputTab').classList.add('active');
    document.querySelector('.timmerCounterTab').classList.remove('active');
    document.querySelector('.start-timer').disabled =false;
    location.reload(true)

});


