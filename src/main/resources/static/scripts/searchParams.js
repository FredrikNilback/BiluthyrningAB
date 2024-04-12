let carList = [];

function removeEmptyParamsFromURL(formData) {
    const urlParams = new URLSearchParams(window.location.search);
    let newParamsString = '';

    for (const [key, value] of urlParams.entries()) {
        if (value.trim() !== '') {
            if (newParamsString !== '') {
                newParamsString += '&';
            }
            newParamsString += `${key}=${value}`;
        }
    }

    const newUrl = `${location.origin}/searchAllCars?${newParamsString}`;


    window.location.href = newUrl;
}


document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('searchForm');
    const rentalDatesForm = document.getElementById('rentalDatesForm');

    if (searchForm) {
        searchForm.addEventListener('submit', function(event) {
            console.log('Form submitted');
            event.preventDefault();

            const startDate = document.getElementById("startDate").value.trim();
            const endDate = document.getElementById("endDate").value.trim();
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
            if (startDate !== '') {
                newParamsString += `startDate=${startDate}&`;
            }
            if (endDate !== '') {
                 newParamsString += `endDate=${endDate}&`;
               }
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
                    carList = cars;
                    displayCars(cars);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        });
    }
});


function calculateAvailableCars(carList, contracts, startDate, endDate) {
    const availableCars = [];

    for (let i = 0; i < carList.length; i++) {
        let car = carList[i];
        let available = true;
        for (let j = 0; j < contracts.length; j++) {
            let contract = contracts[j];
            if (contract.getLicensePlate() == car.licensePlate) {
                if ((startDate < contract.endDate || startDate == contract.getStartDate()) &&
                    (endDate > contract.startDate || endDate == contract.getEndDate())) {
                    available = false;
                    break;
                }
            }
        }
        if (available) {
            availableCars.push(car);
        }
    }

    displayCars(availableCars);
}


function displayCars(cars) {
    const container = document.getElementById('carListContainer');
    container.innerHTML = '';

    if (cars.size == 0) {
        const emptyText = document.createElement('p');
        emptyText.textContent = 'Found Nothing Matching The Criteria';
        container.appendChild(emptyText);
    } else {
        cars.forEach(car => {
            const productContainer = document.createElement("div");
            container.appendChild(productContainer);
            productContainer.setAttribute("class", "productcontainer");


            productContainer.addEventListener("mouseenter", () => {
                this.showFullInfo(car, productContainer);
            });
            productContainer.addEventListener("mouseleave", () => {
                hideFullInfo(infoPanel);
            });


            const productPictureContainer = document.createElement("div");
            productPictureContainer.setAttribute("class", "imgcontainer");
            productContainer.appendChild(productPictureContainer);


            const productPicture = document.createElement("img");
            productPicture.setAttribute("class", "carimg");
            productPicture.setAttribute("src", "images/car" + car.licensePlate + ".png");
            productPictureContainer.appendChild(productPicture);


            const infoPanel = document.createElement("div");
            infoPanel.setAttribute("class", "info-panel");
            productContainer.appendChild(infoPanel);
        });
    }
}

function showFullInfo(car, productContainer) {
    const infoPanel = productContainer.querySelector(".info-panel");

    infoPanel.innerHTML = `
        <p>Märke: ${car.getCarBrand()}</p>
        <p>Pris: ${car.getPricePerDay()} kr/Dag</p>
        <p>RegNr: ${car.licensePlate}</p>
        <p>Modell: ${car.getCarName()}</p>
        <p>Miltal: ${car.getMilage()}</p>
        <p>Växellåda: ${car.getAutomatic()}</p>
        <p>Säten: ${car.getCarSeats()}</p>
        <p>Modell År: ${car.getCarYear()}</p>
    `;

    infoPanel.style.backgroundImage = "url('images/Paper.png')";
    infoPanel.style.backgroundSize = "cover";
    infoPanel.style.backgroundPosition = "center";
    infoPanel.style.backgroundRepeat = "no-repeat";
    infoPanel.style.display = "block";
    infoPanel.style.top = productContainer.offsetHeight + "px";
}




function hideFullInfo(infoPanel) {
    // Hide the info panel
    infoPanel.style.display = "none";
}




