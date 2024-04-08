document.addEventListener('DOMContentLoaded', function() {
    const loginLink = document.getElementById('loginLink');
    const loginForm = document.getElementById('loginForm');
    const loginButton = document.getElementById('loginButton');
    const apiUrl = "http://localhost:8080"; 

    if(loginLink && loginForm){
    loginLink.addEventListener('click', function(event) {
        event.preventDefault();
        loginForm.style.display = loginForm.style.display === 'none' || loginForm.style.display === '' ? 'block' : 'none';
      });
    }else{
        console.log("Login is not found");
    }

    if(loginButton){
    loginButton.addEventListener('click', function() {
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        console.log("Attempting login: ", email,password);

        fetch(apiUrl + "/users/loginUser", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({email: email, password: password}),
        })
        .then(response => {
            if (response.ok) {
                alert("Inloggningen lyckades! Välkommen.");
                window.location.href = "/src/main/resources/templates/profile.html"; 
            } else {
                response.text().then(text => alert(text)); 
            }
        })
        .catch(error => {
            console.error("Det uppstod ett fel", error);
            alert("Ett fel inträffade under inloggningsförsöket.");
        });
      });
    }else{
        console.log("Login knappen is not found");
    }
});

document.addEventListener("DOMContentLoaded", function(){
   const logoutButton = document.getElementById("logoutButton");
   if(logoutButton){
      logoutButton.addEventListener("click", function(){

        console.log("User is logging out");

        alert("Du har loggats ut");
        window.location.href = "/src/main/resources/templates/index.html"; 
        
      });
    }else{
        console.log("utloggningsknappen hittades inte");
    }
});



