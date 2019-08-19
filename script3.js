let typernameElement = document.getElementById("cusscholarname");
let emailElement = document.getElementById("cusscholarlink");
let button3= document.getElementById("add_scholar");
button3.addEventListener("click", updateDB);
// Set database object here
const database = firebase.database().ref()
// **
//   * Updates the database with the username and message.
//   */
function updateDB(event){
   event.preventDefault();
   const typername        = typernameElement.value;
   const email        = emailElement.value;
    
   console.log("Name:" + typername + "Scholarshiplink:" + email );
   //Update database here
   const value = {
       NAME : typername,
       EMAIL: email

        
}
   database.push(value);
   typernameElement.value = "";
   emailElement.value  = "";

     
}

database.on("child_added", addMessagesToBoard)

function addMessagesToBoard(rowData){
   const row = rowData.val();
   const name = row.NAME;
   const email = row.EMAIL; 
   

   let divMessages  = document.querySelector(".customscholar");
   let newmailDiv = document.createElement("div");
   let NameText = document.createElement("a");

   

   

   NameText.innerText = name;
   NameText.href = "" + email;


   newmailDiv.appendChild(NameText);
   


   divMessages.appendChild(newmailDiv);
   

   newmailDiv.style.border= "1px solid black";
   newmailDiv.style.fontSize = "24px";
   newmailDiv.style.height = "auto";
   newmailDiv.style.width = "auto";
   newmailDiv.style.marginBottom="30px";
   newmailDiv.style.display = "block";
   newmailDiv.style.fontFamily = "Lucida Sans, Lucida Sans Regular, Lucida Grande, Lucida Sans Unicode, Geneva, Verdana, sans-serif";

}