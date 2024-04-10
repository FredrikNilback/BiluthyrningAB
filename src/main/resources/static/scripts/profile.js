document.addEventListener("DOMContentLoaded", function(){
    let userDetails = JSON.parse(localStorage.getItem("userDetails"));
    if(userDetails){
    document.getElementById("userEmail").textContent = userDetails.email;
    document.getElementById("userName").textContent = userDetails.userName;
    document.getElementById("userAddress").textContent = userDetails.address;
    document.getElementById("userTelephoneNumber").textContent = userDetails.telephoneNumber;
    }else{
        console.log("Användariformation saknas i localstorage")
    }

    document.getElementById("userName").addEventListener("click", function(){
        document.getElementById("editForm").style.display = "block";
        document.getElementById("EditName").value = this.textContent;
    });
});

function saveChanges(){
    let updatedName = document.getElementById("editName").value;
    let updatedEmail = document.getElementById("editEmail").value;

    fetch("users/updateUserName",{
        method: "PUT",
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify({name: updatedName, email: updatedEmail})
    })
    .then(response =>{
        if(response.ok){
            alert("Uppgifterna sparades");
            document.getElementById("userName").textContent = updatedName;
            document.getElementById("editForm").style.display = "none";
        }else{
            alert("Uppgifterna sparades inte");
        }
    })
    .catch(error => {
        console.error("Det uppstod ett fel när uppgifterna skulle sparas", error);
    })
}

function hideEditForm() {
    document.getElementById("editForm").style.display = "none";
}



