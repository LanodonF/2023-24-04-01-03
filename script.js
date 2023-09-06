//Math.sqrt(document.getElementById("main").querySelectorAll("span").length)

let score = 0; 
let scorebruh= document.getElementById('score');
const mines = document.getElementsByClassName('plot');
const main = document.getElementById('main')
const rows = document.getElementsByClassName('row');
const body = document.getElementById('body');
const favDialog = document.getElementById("favDialog");
if (localStorage.plays == undefined){
  localStorage.setItem("plays", "1");
}
else{
  addEventListener('load',()=>{localStorage.setItem("plays", 
    parseInt(localStorage.getItem("plays"))+1);
})}

if (localStorage.level == undefined){
  localStorage.setItem("level","5");
}

addEventListener('load',()=>{
  //for the adding of rows and columns 
  for (let i =0;  i < localStorage.level; i++){
    main.appendChild(document.createElement('div'));
  }
  let divvs = document.getElementsByTagName('div');
  for (let i =0;  i < localStorage.level; i++){
    for (let div of divvs){
       div.className = "row";
       div.appendChild(document.createElement("span"));
  }
}
  let spans = document.getElementsByTagName("span")
  for(let span of spans){
    span.className= "plot"
    span.innerHTML="<i class=\"fa-solid fa-triangle-exclamation\"></i>"
  }
  //for adding of event listeners
  for (const mine of mines) {
  mine.addEventListener('click', ()=>{
    let random = Math.floor(Math.random() * 4)+1;
    if(random!==1){
      console.log(random);
      mine.innerHTML = "<i class=\"fa-solid fa-check\"></i>"; 
      score++; 
      scorebruh.textContent = score;}
    else{ 
      const para = document.createElement("p");
      const node = document.createTextNode("You had a score of ", score);   
      para.appendChild(node); 
      favDialog.appendChild("para"); 
      favDialog.showModal();}
    if (score===scoreRequirement){
      console.warn("no");
      main.remove();
      const para = document.createElement("p");
      const node = document.createTextNode("You have passed this level!");
      para.appendChild(node);
      body.appendChild(para);
      localStorage.setItem("level", parseInt(localStorage.getItem("level"))+1);
    }    

  })
}

}
)

let scoreRequirement = localStorage.getItem("level") * 2;


