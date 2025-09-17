function greet(){
    alert("Welcome!!!!")
}
window.onload = greet;

document.getElementById("demo").innerHTML = new Date().getFullYear(); 

function availibility(id){
    if(id == "Available"){
        alert("It's available")
    }
    else{
        alert("Not available")
    }  
}
function validateForm() {
    var name= document.getElementById("name").value;
    var email= document.getElementById("email").value;
    var message= document.getElementById("message").value;
    if(name==""|| email==""|| message==""){
       alert("Please fill all fields");
       return false; 
    }
    if(email.indexOf("@")==-1 || email.indexOf(".")==-1){
        alert("Please enter valid email")
        return false;
    }
    alert("Form Submitted Successfully!")
}
function SendMessage(){
    let input = document.getElementById("user-input").value.toLowerCase();
    let chatLog = document.getElementById("chat-window")
    let userMsg = document.createElement("p");
    userMsg.textContent = "You: " + input;
    chatLog.appendChild(userMsg);
    let botMsg = document.createElement("p");
    botMsg.textContent = "Bot: " + GetBotResponse(input);
    chatLog.appendChild(botMsg);
    document.getElementById("user-input").value = "";
    chatLog.scrollTop = chatLog.scrollHeight;
}
function GetBotResponse(input){
    if(input.includes("hello") || input.includes("hi")) {
        return "Hi there! How can I help you?";
    }
    else if (input.includes("how are you?")){
        return "I am a bot, why do you care?";
    }
     else if (input.includes("do you serve the best burgers?")){
        return "Yes, We do. What do you like to order?";
    }
    else if (input.includes("bye")){
        return "Goodbye :)!";
    }
    else{
        return "I don't understand that :(";
    }
        
}
