let gameseq=[];
let userseq=[];
let btnColors=["yellow","red","green","purple"];
let started=false;
let level=0;
let highestscore=0;
let h3=document.querySelector("h3");
let h2=document.querySelector("h2");
document.addEventListener("keypress",function () {
    if(started == false){
        console.log("Game started");
        started=true;
    }
    levelup();
});


function btnflash(btn){ 
btn.classList.add("flash");
setTimeout(function(){
    btn.classList.remove("flash");
    console.log("removed the flash function");
},250);

};

function levelup(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randIndx=Math.floor(Math.random()*4);
    let randcolor=btnColors[randIndx];
    gameseq.push(randcolor);
    let randbtn=document.querySelector(`.${randcolor}`);
    // console.log(`${randcolor} jiska index number hai ${randIndx} and btn hai ${randbtn}`);
    btnflash(randbtn);
}

function userflash(btn){
    btn.classList.add("uflash");
    setTimeout(function(){
    btn.classList.remove("uflash");
    console.log("removed the uflash function");
},250);
    
}


function checkans(idx){
    // console.log("Curr level: ",level);
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup, 800);
        }
    }
    else{
        h2.innerHTML=`Game Over!Your score was <b>${level}</b><br>Press any key to restart.`;
        if(level>highestscore){
            highestscore=level;
        
           h3.innerHTML=`
           Highest Score Till Now : <b>${highestscore}</b>`;

            
        }
       document.querySelector("body").style.backgroundColor="red";
       setTimeout(()=>{
        document.querySelector("body").style.backgroundColor="white";
       },150);

        reset();
    }
    
}


function btnPress(){
    console.log(this);
let clicked=this;
userflash(clicked);
usercolor=clicked.getAttribute("id");

// console.log("user enter the color: "+usercolor);
userseq.push(usercolor);
checkans(userseq.length-1);

}

let allbtns=document.querySelectorAll(".btn");
for(let button of allbtns){
    button.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    userseq=[];
    gameseq=[];
    level=0;
    // background.style.backgroundColor="white";
    

}