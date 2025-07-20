function makeBubble(){
    var clutter="";

for(var i=1;i<=70;i++){
    var rn=Math.floor(Math.random()*10)
    clutter+=`<div class="bubble">${rn}</div>`;
}

document.querySelector("#panel-bottom").innerHTML=clutter;
}
var hitrn;
function getnewhit(){
      hitrn=Math.floor(Math.random()*10);
      document.querySelector("#hitval").textContent=hitrn;
}

var score=0;
function increasescore(){
    score+=10;
    document.querySelector("#scoreval").textContent=score;
}

var timer=10;
function runTimer(){
   var timerinterval= setInterval(function(){
        if(timer>0){
            timer--;
        document.querySelector("#timervalue").textContent=timer;
    }
    else{
        clearInterval(timerinterval);
        document.querySelector("#panel-bottom").innerHTML=`<h1>Game Over</h1>`;
    }
    },1000);
}

document.querySelector("#panel-bottom").addEventListener("click",function(dets){
    var clickednum=Number(dets.target.textContent);
    if(clickednum==hitrn){
        increasescore();
        makeBubble();
        getnewhit();
    }
});
getnewhit();
runTimer();
makeBubble();
  

//event bubbling ==== jispe click karoge wo element par event raise 
// hoga,aur event listener na milne par event element ke parent par listerner 
// milega waha bhi 
// na milne par event parent ke parent par listener dhundega..