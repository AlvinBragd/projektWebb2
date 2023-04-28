let counter = document.getElementById("counterItem");

let number =Math.floor( Math.random() * 100 +3); 

counter.innerHTML = number.toString();

let body = document.querySelector("body");
let container = document.getElementById("container")
let popupFoundation = document.getElementById("popupFoundation")
let gymButton = document.getElementById("gymButton")
let bikeButton = document.getElementById("bikeButton")
let washButton = document.getElementById("washButton")
let exit = document.getElementsByClassName("exit")

let gymPopup = document.getElementById("gymPopup")
let bikePopup = document.getElementById("bikePopup")
let washPopup = document.getElementById("washPopup")


gymButton.addEventListener("click", function(){
    gymPopup.style.display= "block";
    gymPopup.style.height="50vh"
    gymPopup.style.width="50vw"
    gymPopup.style.backgroundColor ="White";
    gymPopup.style.position="fixed";
    gymPopup.style.left="25%"
    gymPopup.style.right="25%"
    gymPopup.style.top="25%"
    gymPopup.style.bottom="25%"
    body.style.backgroundColor ="rgba(0,0,0,0.5)"
    popupFoundation.style.display="block";

})

bikeButton.addEventListener("click", function(){
    bikePopup.style.display= "block";
    bikePopup.style.height="50vh"
    bikePopup.style.width="50vw"
    bikePopup.style.backgroundColor ="White";
    bikePopup.style.position="fixed";
    bikePopup.style.left="25%"
    bikePopup.style.right="25%"
    bikePopup.style.top="25%"
    bikePopup.style.bottom="25%"
    body.style.backgroundColor ="rgba(0,0,0,0.5)"
    popupFoundation.style.display="block";
})

washButton.addEventListener("click", function(){
    washPopup.style.display= "block";
    washPopup.style.height="50vh"
    washPopup.style.width="50vw"
    washPopup.style.backgroundColor ="White";
    washPopup.style.position="fixed";
    washPopup.style.left="25%"
    washPopup.style.right="25%"
    washPopup.style.top="25%"
    washPopup.style.bottom="25%"
    body.style.backgroundColor ="rgba(0,0,0,0.5)"
    popupFoundation.style.display="block";
})

for(let i = 0; i < 3; i++){
    exit[i].addEventListener("click", function(){
        gymPopup.style.display= "";
        gymPopup.style.position="";
        gymPopup.style.top=""
        gymPopup.style.left=""
        bikePopup.style.display= "";
        bikePopup.style.position="";
        bikePopup.style.top=""
        bikePopup.style.left=""
        washPopup.style.display= "";
        washPopup.style.position="";
        washPopup.style.top=""
        washPopup.style.left=""
        body.style.backgroundColor ="rgba(255,255,255,1)"
        popupFoundation.style.display="none";
    })
}

