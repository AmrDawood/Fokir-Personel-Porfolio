                     // ourPorfolio section light box script
let imgs = Array.from(document.querySelectorAll(".gallaryItem .inner img"));
let lightBoxContainer = document.getElementById("lightBoxContainer");
let lightBoxItem = document.getElementById("lightBoxItem");
let nextBtn = document.getElementById("next");
let prevBtn  = document.getElementById("prev");
let currentSlideIndex = 0  ;

for (let index = 0; index < imgs.length; index++) {
   imgs[index].addEventListener('click',showLightBoxContainer); 
}
function showLightBoxContainer(eventInfo){
    currentSlideIndex =imgs.indexOf(eventInfo.target);
    let imgSrc = eventInfo.target.src;
    lightBoxContainer.style.display ="flex";
    lightBoxItem.style.backgroundImage= `url(${imgSrc})`;
}

nextBtn.addEventListener("click",nextSlide);
function nextSlide(){
    currentSlideIndex++;
    if(currentSlideIndex==imgs.length){
        currentSlideIndex = 0 ;
    }
    let imgSrc =imgs[currentSlideIndex].src;
    lightBoxItem.style.backgroundImage= `url(${imgSrc})`;
}

prevBtn.addEventListener("click",prevSlide);
function prevSlide(){
    currentSlideIndex--;
    if(currentSlideIndex< 0){
        currentSlideIndex = imgs.length-1 ;
    }
    let imgSrc =imgs[currentSlideIndex].src;
    lightBoxItem.style.backgroundImage= `url(${imgSrc})`;
}

document.getElementById('close').addEventListener("click",closeSlide);
function closeSlide(){
    lightBoxContainer.style.display ="none";
}

document.addEventListener('keydown' ,function(eventInfo){
    if(eventInfo.keyCode==39){
        nextSlide();
    }else if(eventInfo.keyCode==37){
        prevSlide();
    }else if(eventInfo.keyCode==27){
        closeSlide();
    }
})

lightBoxContainer.addEventListener("click",function(eventInfo){

    if(eventInfo.target !=lightBoxItem && eventInfo.target != prevBtn && eventInfo.target != nextBtn ){
        closeSlide();
    }
})

                     // statistics section counter script
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

