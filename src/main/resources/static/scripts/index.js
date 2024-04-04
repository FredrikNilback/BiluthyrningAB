document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginLink').addEventListener('click', function(event) {
        event.preventDefault(); 
        var loginForm = document.getElementById('loginForm');
        if (loginForm.style.display === "none" || loginForm.style.display === "") {
            loginForm.style.display = "block";
        } else {
            loginForm.style.display = "none";
        }
    });
});

