document.addEventListener("DOMContentLoaded", function() {
    const userEmail = localStorage.getItem("userEmail"); 
    if (!userEmail) {
        console.error('No user email found in localStorage');
        return;
    }

    fetch(`http://localhost:8080/Contract/getContracts`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(contracts => {
            const container = document.getElementById("contractsContainer");
            if (contracts.length > 0) {
                contracts.forEach(contract => {
                    const contractElement = document.createElement("div");
                    contractElement.innerHTML = `
                        <h3>Kontrakt #: ${contract.contractNumber}</h3>
                        <p>Bil: ${contract.car.licensePlate}</p>
                        <p>Startdatum: ${new Date(contract.startDate).toLocaleDateString()}</p>
                        <p>Slutdatum: ${new Date(contract.endDate).toLocaleDateString()}</p>
                        <p>Total kostnad: ${contract.totalCost} SEK</p>
                    `;
                    container.appendChild(contractElement);
                });
            } else {
                container.innerHTML = '<p>Inga kontrakt att visa.</p>';
            }
        })
        .catch(error => {
            console.error("Failed to fetch contracts:", error);
        });
});
