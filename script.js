let text = document.getElementById("text");
let message = document.getElementById("message");

let clicked = false;


function startFix(){

    if(clicked) return;

    clicked = true;


    // Hearts start immediately
    createHearts();


    let lines = [

        "🔍 Mood scan started...",

        "Hmm... someone is acting mysterious today 👀",

        "Checking if you are still pretending to be angry 😤",

        "Breaking news: you are still cute when you are annoyed 😂",

        "Searching for the missing smile...",

        "Smile found successfully 😌❤️",

        "Risako ho babe 🍒",

        "I know you are busy ignoring me but..."

        ,
        "I miss annoying you a little bit 🤭",

        "Don't act too serious, I know you are smiling right now 😏",

        "Your angry mode looks suspiciously adorable 😂",

        "Congratulations, you unlocked my attention ✨",

        "Come back before I start talking to myself again 🤨"

    ];


    let index = 0;


    let interval = setInterval(()=>{


        text.innerHTML = lines[index];


        index++;


        if(index >= lines.length){

            clearInterval(interval);


            message.innerHTML =

            `
            🍒 Risako ho babe 🍒
            <br><br>
            Stop ignoring me for too long 😭
            <br><br>
            I miss our random talks and your annoying side 😂
            <br><br>
            Now give me that cute little smile ✨
            `;


        }


    },1500);


}




function createHearts(){


    for(let i=0;i<80;i++){


        let heart=document.createElement("div");


        heart.className="heart";


        heart.innerHTML="❤️";


        heart.style.left =
        Math.random()*100+"vw";


        heart.style.fontSize =
        Math.random()*25+15+"px";


        // Faster hearts
        heart.style.animationDuration =
        Math.random()*3+3+"s";


        heart.style.animationDelay =
        Math.random()*2+"s";


        document.body.appendChild(heart);



        setTimeout(()=>{

            heart.remove();

        },6000);


    }


}
