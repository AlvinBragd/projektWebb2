let counter = document.getElementById("counterItem");

let number =Math.floor(Math.random() * 100 +3); 

counter.innerHTML = number.toString();


let centrumAreaButton = document.getElementById("centrumArea");
let allAreaButton = document.getElementById("allAreas");
let noGroundLevelButton = document.getElementById("noGroundLevel");
let allLevelButton = document.getElementById("allLevels");

let groundLevelHouse = document.getElementById("house3")

centrumAreaButton.addEventListener("click", function(){
    groundLevelHouse.style.display="none";
})

allAreaButton.addEventListener("click", function(){
    groundLevelHouse.style.display="grid";
})

noGroundLevelButton.addEventListener("click",function(){
    groundLevelHouse.style.display="none";
})

allLevelButton.addEventListener("click",function(){
    groundLevelHouse.style.display="grid";
})