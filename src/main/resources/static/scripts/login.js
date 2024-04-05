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
                window.location.href = "/profile.html"; 
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
