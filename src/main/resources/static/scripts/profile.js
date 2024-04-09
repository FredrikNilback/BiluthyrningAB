//let user = JSON.parse(localStorage.getItem("userEmail"));
//document.getElementById("userEmail").textContent = user.email;

document.addEventListener("editUserInfo").addEventListener("click" , function(){
    document.getElementById("editName").value = document.getElementById("userName").textContent;
    document.getElementById("editEmail").value = document.getElementById("userEmail").textContent;
    document.getElementById("editAddress").value = document.getElementById("userAdress").textContent;
    
}