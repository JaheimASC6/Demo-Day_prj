let box1 = document.getElementById("title_input");
let box2 = document.getElementById("noun");
let box4 = document.getElementById("adjective");
let button2 = document.getElementById("submit_button");
button2.addEventListener("click", contactoff);

function contactoff(event){
    if (box1.value == "" || box2.value == "" || box4.value == ""){
        alert("Please fill out all information.")
    }
    
}
