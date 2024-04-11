document.addEventListener("DOMContentLoaded", function(){
    let userDetails = JSON.parse(localStorage.getItem("userDetails"));
    if(userDetails){
        document.getElementById("userName").textContent = userDetails.userName;
        document.getElementById("userAddress").textContent = userDetails.address;
        document.getElementById("userTelephoneNumber").textContent = userDetails.telephoneNumber;

        document.getElementById("userName").parentNode.addEventListener("click", function() {
            enableEditing("userName", userDetails.userName);
        });
        document.getElementById("userAddress").parentNode.addEventListener("click", function() {
            enableEditing("userAddress", userDetails.address);
        });
        document.getElementById("userTelephoneNumber").parentNode.addEventListener("click", function() {
            enableEditing("userTelephoneNumber", userDetails.telephoneNumber);
        });

    }else{
        console.log("Användariformation saknas i localstorage");
    }
});

function enableEditing(field, currentValue) {
    const parent = document.getElementById(field).parentNode;
    parent.innerHTML = `<input type="text" id="input_${field}" value="${currentValue}">
    <button onclick="saveChanges('${field}')">Spara</button>`;
}
function saveChanges(field) {
    const newValue = document.getElementById(`input_${field}`).value;
    switch(field) {
        case "userName":
            updateUserName(newValue);
            break;
        case "userAddress":
            updateUserAddress(newValue);
            break;
        case "userTelephoneNumber":
            updateUserTelephoneNumber(newValue);
            break;
        default:
            console.log("Okänt fält: " + field);
    }
}
function updateUserName(newUserName) {
    let userDetails = JSON.parse(localStorage.getItem("userDetails"));
    const apiURL = "http://localhost:8080"; 
    fetch(apiURL + "/users/updateUserName" , {
        method: "PUT",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email: userDetails.email,name: newUserName}),
    })
    .then(handleResponse)
    .then(() => updateLocalAndUI("userName", newUserName))
    .catch(error => console.error("Error updating username:", error));
}
function updateUserAddress(newUserAddress) {
    let userDetails = JSON.parse(localStorage.getItem("userDetails"));
    const apiURL = "http://localhost:8080"; 
    fetch(apiURL + "/users/updateAddress" , {
        method: "PUT",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email: userDetails.email,address: newUserAddress}),
     })
    .then(handleResponse)
    .then(() => updateLocalAndUI("userAddress", newUserAddress))
    .catch(error => console.error("Error updating address:", error));
}
 function updateUserTelephoneNumber(newUserTelephoneNumber) {
    let userDetails = JSON.parse(localStorage.getItem("userDetails"));
    const apiURL = "http://localhost:8080"; 
    fetch(apiURL + "/users/updateTelephoneNumber" , {
        method: "PUT",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email: userDetails.email,telephoneNumber: newUserTelephoneNumber}),
     })
    .then(handleResponse)
    .then(() => updateLocalAndUI("userTelephoneNumber", newUserTelephoneNumber))
    .catch(error => console.error("Error updating telephone number:", error));
}

function handleResponse(response) {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
}

function updateLocalAndUI(field, newValue) {
    let userDetails = JSON.parse(localStorage.getItem("userDetails"));
    userDetails[field] = newValue;
    localStorage.setItem("userDetails", JSON.stringify(userDetails));

    // Bestäm vilken label som ska användas baserat på vilket fält som uppdateras
    let label = '';
    if (field === 'userName') {
        label = 'Namn';
    } else if (field === 'userAddress') {
        label = 'Adress';
    } else if (field === 'userTelephoneNumber') {
        label = 'Telephonenumber';
    }

    // Skapa en ny HTML-sträng för span-elementet och knappen
    const parent = document.getElementById(field).parentNode;
    parent.innerHTML = `<p>${label}: <span id="${field}">${newValue}</span></p>
                        <button id="edit${field}Button">Ändra</button>`;

    // Lägg till eventlyssnare till den nya Ändra-knappen
    document.getElementById(`edit${field}Button`).addEventListener('click', function() {
        enableEditing(field, newValue);
    });

    // Uppdatera visningen för att visa den nya värdet
    document.getElementById(field).textContent = newValue;
}

