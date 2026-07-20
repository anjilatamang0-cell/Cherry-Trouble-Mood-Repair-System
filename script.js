let text = document.getElementById("text");
let message = document.getElementById("message");

let started = false;


function startFix(){

    if(started) return;

    started = true;


    // Start hearts instantly
    createHearts();


    let lines = [
        "🔍 Mood scan activated...",
        "Checking your serious face... 👀",
        "Hmm... attitude level is pretty high today 😤",
        "But wait... cute level is also dangerously high 😂",
        "Searching for the missing smile...",
        "Smile detected successfully 😌❤️",
        "Risako ho babe 🍒",
        "Your silent mode is kinda suspicious...",
        "Don't pretend you didn't smile right now 😏",
        "Warning: I may continue annoying you forever 🤭",
        "Anyway... , I miss you "
    ];


    let i = 0;


    let changeText = setInterval(()=>{


        text.innerHTML = lines[i];


        i++;


        if(i >= lines.length){

            clearInterval(changeText);


            message.innerHTML =
            `
             Risako ho babe 
            <br><br>
            Zzz found gf or smth 
            <br><br>
            I miss you buttt
            <br><br>
            jaa tei sanga 😌
            <br><br>
            hmph
            `;

        }


    },1800);


}




function createHearts(){


    setInterval(()=>{


        let heart=document.createElement("div");


        heart.className="heart";


        heart.innerHTML="❤️";


        heart.style.left =
        Math.random()*100+"vw";


        heart.style.fontSize =
        Math.random()*20+15+"px";


        heart.style.animationDuration =
        Math.random()*3+4+"s";


        document.body.appendChild(heart);


        setTimeout(()=>{

            heart.remove();

        },7000);



    },250);


}
