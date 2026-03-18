function openModal(type){

const modal=document.getElementById("modal");
const title=document.getElementById("modalTitle");
const text=document.getElementById("modalText");

if(type==="about"){

title.innerText="About Me";

text.innerHTML=
"Engineering graduate (2024) currently working as a Manual Test Engineer at Amazon. Passionate about quality engineering, automation and learning new tech.";

}

if(type==="exp"){

title.innerText="Experience";

text.innerHTML=
"Associate Quality Services (L2) at Amazon working on Kindle products. Experienced in manual testing, bug reporting and quality validation.";

}

if(type==="skills"){

title.innerText="Skills";

text.innerHTML=`

<div class="skill">
Java
<div class="bar"><div class="fill" style="--skill:80%"></div></div>
</div>

<div class="skill">
MySQL
<div class="bar"><div class="fill" style="--skill:70%"></div></div>
</div>

<div class="skill">
Frontend
<div class="bar"><div class="fill" style="--skill:60%"></div></div>
</div>

<div class="skill">
QA Testing
<div class="bar"><div class="fill" style="--skill:90%"></div></div>
</div>

`;

}

if(type==="edu"){

title.innerText="Education";

text.innerHTML=
"B.E Computer & Communication Engineering — Panimalar Engineering College (2024).";

}

modal.classList.add("show");

}

function closeModal(){
document.getElementById("modal").classList.remove("show");
}


/* CLOSE MODAL OUTSIDE */

window.onclick=function(event){

const modal=document.getElementById("modal");

if(event.target===modal){
closeModal();
}

}


/* ESC CLOSE */

document.addEventListener("keydown",function(e){

if(e.key==="Escape"){
closeModal();
}

});


/* PARTICLES */

const particles=document.getElementById("particles");

for(let i=0;i<40;i++){

const p=document.createElement("span");

p.style.left=Math.random()*100+"%";

p.style.animationDuration=(5+Math.random()*10)+"s";

particles.appendChild(p);

}


/* THEME TOGGLE */

function toggleTheme(){

document.body.classList.toggle("light");

const btn=document.querySelector(".theme-toggle");

if(document.body.classList.contains("light")){
btn.innerText="☀️";
}else{
btn.innerText="🌙";
}

}


/* TYPING ANIMATION */

const roles=[
"Manual Test Engineer",
"Tech Enthusiast",
"Beginner Developer"
];

let roleIndex=0;
let charIndex=0;

function typeEffect(){

const typing=document.getElementById("typing");

if(charIndex<roles[roleIndex].length){

typing.innerHTML+=roles[roleIndex].charAt(charIndex);

charIndex++;

setTimeout(typeEffect,70);

}

else{

setTimeout(()=>{
typing.innerHTML="";
charIndex=0;
roleIndex=(roleIndex+1)%roles.length;
typeEffect();
},2000);

}

}

typeEffect();