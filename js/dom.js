const stopWatchButton = document.querySelector(".stopWatchButton");
const timerTabButton=document.querySelector('.timerTabButton');

stopWatchButton.addEventListener('click',()=>{
    document.querySelector('.stop-watch-tab').classList.add('active');
    document.querySelector('.timer-tab').classList.remove('active');
    document.querySelector('.stopWatchButton').classList.add('active-btn');
    document.querySelector('.timerTabButton').classList.remove('active-btn');
});
timerTabButton.addEventListener('click',()=>{
document.querySelector('.timer-tab').classList.add('active');
document.querySelector('.stop-watch-tab').classList.remove('active');
document.querySelector('.timerTabButton').classList.add('active-btn');
document.querySelector('.stopWatchButton').classList.remove('active-btn');
});
