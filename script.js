let
let score = 0; 
let scorebruh= document.getElementById('score')
const mines = document.getElementsByClassName('plot')
let bruh = document.getElementById('garden')

if (localStorage.plays == undefined){
  localStorage.setItem("plays", "1")
}
else{
  addEventListener('load',()=>{localStorage.setItem("plays", 
    parseInt(localStorage.getItem("plays"))+1)
})}

for (const mine of mines) {
  mine.addEventListener('click', ()=>{
    let random = Math.floor(Math.random() * 4)+1;
    if(random!==1){console.log(random);mine.innerHTML = "<i class=\"fa-solid fa-check\"></i>"; score++; scorebruh.textContent = score}
    else{ const para = document.createElement("p");
    const node = document.createTextNode("You lose!! You had a score of " + score);
    para.appendChild(node);
    const elemen = document.getElementById("ja");
    elemen.appendChild(para);const but= document.createElement("button"); but.textContent="Reload"; elemen.appendChild(but); but.addEventListener('click',()=>{location.reload()});}
  })
}

