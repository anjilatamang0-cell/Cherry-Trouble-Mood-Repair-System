let text = document.getElementById("text");
let message = document.getElementById("message");

function startFix(){

    text.innerHTML = "🔍 Starting mood scan...";

    setTimeout(()=>{

        text.innerHTML =
        "Checking attitude levels... 👀";

    },1500);


    setTimeout(()=>{

        text.innerHTML =
        "Hmm... someone looks a little grumpy today 😤";

    },3000);


    setTimeout(()=>{

        text.innerHTML =
        "But wait... smile detected somewhere 🤨";

    },4500);


    setTimeout(()=>{

        text.innerHTML =
        "Searching for the reason behind the silence... 🍒";

    },6000);


    setTimeout(()=>{

        text.innerHTML =
        "Found it: someone misses talking to you ❤️";

    },7500);


    setTimeout(()=>{

        message.innerHTML =
        `
        <br>
        Stop ignoring me hunnie 🥲🍒
        <br><br>
        I know you are pretending to be mad 😌
        <br><br>
        Come back before I start being annoying again 😂
        <br><br>
        (Too late... I already started)
        `;

        createHearts();

    },9000);

}



function createHearts(){

    for(let i=0;i<50;i++){

        let heart=document.createElement("div");

        heart.className="heart";

        heart.innerHTML="❤️";


        heart.style.left =
        Math.random()*100+"vw";


        heart.style.fontSize =
        Math.random()*30+15+"px";


        heart.style.animationDuration =
        Math.random()*6+5+"s";


        document.body.appendChild(heart);



        setTimeout(()=>{

            heart.remove();

        },10000);

    }

}
