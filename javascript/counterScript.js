let counters =document.querySelectorAll(".statisticsCol span");
let counterSpeed= 250;
let statistics =document.getElementById('statistics');
window.addEventListener('scroll',updateCounterByScroll);
function updateCounterByScroll(){
    let statisticsTopPos = statistics.getBoundingClientRect().top;//
    let statisticsBottomPos = statistics.getBoundingClientRect().bottom;//

 if(statisticsTopPos <= 450 && statisticsBottomPos >= 160){
    updateCounter()
} 
}
function updateCounter(){
 for(let i=0 ;i<counters.length;i++){
    let counterTarget = +counters[i].dataset.target ;
    let counterValue = +counters[i].innerText ;
    let incrementSpeed = counterTarget/counterSpeed ;
    if(counterTarget>counterValue){
        counters[i].innerText=Math.ceil(counterValue+incrementSpeed);
    }else{
        counters[i].innerText=counterTarget ;
    }
}
setTimeout(updateCounter,25);
} 

