
//Funktion för att ta bort parametrar i URLen som är tomma, detta så att man kan få en korrekt
//lista med bilar man söker för.
function removeEmptyParamsFromURL(formData) {
    const urlParams = new URLSearchParams(window.location.search);
    let newParamsString = '';
//Man tar den URLen som skapas och loopar igenom alla keys. Kollar ifall varje key har en value och isåfall
//lägger till den i en ny String newParamsString.
    for (const [key, value] of urlParams.entries()) {
        if (value.trim() !== '') {
            if (newParamsString !== '') {
                newParamsString += '&';
            }
            newParamsString += `${key}=${value}`;
        }
    }

    //Sätter in den nya Stringen i URLen så man får den fri ifrån tomma parametrar.
    const newUrl = `${location.origin}/searchAllCars?${newParamsString}`;


    window.location.href = newUrl;
}

//Här kopplar man så att funktonen ovan körs när man klickar på knappen som hör till formen searchForm på
// searchCars.html. Initierar en formData som skapar ett objekt av formen och sparar alla värden man skrivit in.
document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('searchForm');
    if (searchForm) {
        searchForm.addEventListener('submit', function(event) {
            console.log('Form submitted');
            event.preventDefault();


            const carName = document.getElementById("carName").value.trim();
            const carBrand = document.getElementById("carBrand").value.trim();
            const milage = document.getElementById("milage").value.trim();
            const automatic = document.getElementById("automatic").value.trim();
            const carSeats = document.getElementById("carSeats").value.trim();
            const carYear = document.getElementById("carYear").value.trim();
            const engineType = document.getElementById("engineType").value.trim();
            const carType = document.getElementById("carType").value.trim();
            const pricePerDay = document.getElementById("pricePerDay").value.trim();




            let newParamsString = '';
            if (carName !== '') {
                newParamsString += `carName=${carName}&`;
            }
            if (carBrand !== '') {
                newParamsString += `carBrand=${carBrand}&`;
            }
            if (milage !== '') {
                newParamsString += `milage=${milage}&`;
            }
            if (automatic !== '') {
                  newParamsString += `automatic=${automatic}&`;
            }
            if (carSeats !== '') {
                newParamsString += `carSeats=${carSeats}&`;
            }
            if (carYear !== '') {
                newParamsString += `carYear=${carYear}&`;
            }
            if (engineType !== '') {
                newParamsString += `engineType=${engineType}&`;
            }
            if (carType !== '') {
                newParamsString += `carType=${carType}&`;
            }
            if (pricePerDay !== '') {
                newParamsString += `pricePerDay=${pricePerDay}&`;
            }


            if (newParamsString.endsWith('&')) {
                newParamsString = newParamsString.slice(0, -1);
            }


            const newUrl = `${location.origin}/searchAllCars?${newParamsString}`;


            //window.location.href = newUrl;


            fetch(newUrl)
                            .then(response => response.json())
                            .then(data => {

                                const cars = data.map(carData => {
                                    return new Car(
                                        carData.licensePlate,
                                        carData.carName,
                                        carData.carBrand,
                                        carData.milage,
                                        carData.automatic,
                                        carData.carSeats,
                                        carData.carYear,
                                        carData.engineType,
                                        carData.carType,
                                        carData.pricePerDay
                                    );
                                });

                               //Just nu så visas bilarna enbart i konsolen.
                                displayCars(cars);
                            })
                            .catch(error => {
                                console.error('Error fetching data:', error);
                            });


        });
    }
});




function displayCars(cars) {

    let carGen = new CarGeneration();
    const container = document.getElementById('carListContainer');

    container.innerHTML = ''; //Rensar containern

    if (cars.size == 0){
    const emptyText = document.createElement('p');
    emptyText.textContent = 'Found Nothing Matching The Criteria';
    container.appendChild(emptyText);
    }
    else{
    cars.forEach(car => {

        carGen.carCard(car, "carListContainer");

        /*
        const carDiv = document.createElement('div');
        carDiv.classList.add('car-item');

        const image = document.createElement('img');
        image.src = `http://your-server.com/getImage?licensePlate=${car.licensePlate}`;
        image.alt = `${car.carBrand} ${car.carName}`;
        carDiv.appendChild(image);

        const carInfo = document.createElement('p');
        carInfo.textContent = `Car: ${car.carBrand} ${car.carName}, Year: ${car.carYear}, Price per day: ${car.pricePerDay}`;
        carDiv.appendChild(carInfo);

        container.appendChild(carDiv);
        */
    });
    }
}


