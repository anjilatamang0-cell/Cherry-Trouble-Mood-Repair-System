function startFix(){

let text = document.getElementById("text");
let message = document.getElementById("message");

text.innerHTML =
"Scanning mood levels... 🍷";


setTimeout(()=>{

text.innerHTML =
"Anger detected... but still cute 😌";


},2000);


setTimeout(()=>{

message.innerHTML =
"Stop ignoring me hunnie 🥲🍒<br>I miss you";

createHearts();


},4000);

}



function createHearts(){

for(let i=0;i<40;i++){

let heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";


heart.style.left=
Math.random()*100+"vw";


heart.style.fontSize=
Math.random()*25+15+"px";


heart.style.animationDuration=
Math.random()*5+5+"s";


document.body.appendChild(heart);



setTimeout(()=>{

heart.remove();

},9000);


}

}
