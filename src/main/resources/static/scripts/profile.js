document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("loginLink").addEventListener("click", function(event){
        event.preventDefault();
        var loginForm= document.getElementById("loginForm");
        loginForm.style.display = loginForm.style.display === "block" ? "none" : "block";
    });

    document.getElementById("loginButton").addEventListener("click", function(){
        console.log("Logga in knappen klickades");
        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;

        fetch(apiUrl + "/users/loginUser",{
            method: "POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify({email: email, password: password}),
    })
    .then(response => {
        if(response.ok){
            window.location.href = "/src/main/resource/static/profile.html";
        }else{
            response.text().then(text=> alert(text));
        }
    })
    .catch(error => {
        console.error("Det uppstod ett fel", error);
    });
});
});  