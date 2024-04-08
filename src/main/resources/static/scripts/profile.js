document.addEventListener("DOMContentLoaded", function(){
    const apiURL = "http://localhost:8080/users";

    

    const nameForm = document.getElementById("updateNameForm");
    if(nameForm){
        nameForm.addEventListener("submit", function(e){
            e.preventDefault();
            const newUserName = document.getElementById("nameInput").value;
            updateUsername(userEmail, newUserName);
        });
    }
})

