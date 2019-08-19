
// let title_input = document.getElementById("title_input");

// let main_title = document.getElementById("main_title");

// let button = document.getElementById("submit_button");
// let adjective = document.getElementById("adjective");
// let verb = document.getElementById("verb");
// let noun = document.getElementById("noun");
// let title = document.getElementById("title_input");
// let story_result = document.getElementById("story_result");
// let form_container = document.querySelector(".form_container");

// let adlibs = [noun, verb, title];

// title_input.addEventListener("change", updateMainTitle);
// button.addEventListener("click", msg);
// function updateMainTitle(){
//     main_title.innerHTML= title_input.value;
// }
// function msg(event){
//     let result;

//     event.preventDefault();
//     let isBlank;
//     isBlank=false;
//     for (let i in adlibs) {
//     if(adlibs[i].value =="" ){
//     alert("Please make your HERO!");
//     break;
//     }}
//     if (isBlank==true){
//         form_container.style.display = "none";
//         result = "Last night I ate a "+noun.value+", and today I just had to"+verb.value+". What a "+adjective.value+ " day!";
//         story_result.innerHTML= result;
//     }
// }
// this is for the update page


let collegenameElement = document.getElementById("collegename");
let descriptionElement = document.getElementById("colldesc");
let button = document.getElementById("add_button");
button.addEventListener("click",updateDB);
// Set database object here
const database = firebase.database().ref()
// **
//   * Updates the database with the username and message.
//   */
function updateDB(event){
    event.preventDefault();
    const collegename        = collegenameElement.value;
    const description        = descriptionElement.value;
     
    console.log("College: " + collegename + "Description:" + description);
    if(collegename == "" || description == "") {
        alert("Please fill out a College before pressing Add.")
    }
    //Update database here
   else {
    const value = {
        NAME : collegename,
        DESCRIPTION: description     
    }
    database.push(value);
    collegenameElement.value = "";
    descriptionElement.value  = "";
}
}

database.on("child_added", addMessagesToBoard)

function addMessagesToBoard(rowData){
    const row = rowData.val();
    const name = row.NAME;
    const description = row.DESCRIPTION; 
   

    let divMessages  = document.querySelector(".knowtheway");
    let newCollegeDiv = document.createElement("div");
    let collegeText = document.createElement("p");
    let collegeDesc = document.createElement("p");
    

    collegeText.innerText = 'College: ' + name;
    collegeDesc.innerText = 'Description: ' + description;
    
    newCollegeDiv.appendChild(collegeText);
    newCollegeDiv.appendChild(collegeDesc);

    divMessages.appendChild(newCollegeDiv);
    

    newCollegeDiv.style.border= "1px solid black";
    newCollegeDiv.style.fontSize = "24px";
    newCollegeDiv.style.height = "auto";
    newCollegeDiv.style.width = "auto";
    newCollegeDiv.style.marginBottom="30px";
    newCollegeDiv.style.display = "block";
    newCollegeDiv.style.fontFamily = "Lucida Sans, Lucida Sans Regular, Lucida Grande, Lucida Sans Unicode, Geneva, Verdana, sans-serif";
    newCollegeDiv.style.flexDirection = "column-reverse	";
    
}

