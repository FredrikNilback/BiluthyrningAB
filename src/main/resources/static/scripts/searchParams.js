const searchForm = document.getElementById('searchForm');
const carGen = new CarGeneration("page-layout");
searchForm.addEventListener('submit', (event)=> {
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

    //URL to get data from API
    const newUrl = `http://localhost:8080/searchAllCars?${newParamsString}`;
    console.log(newUrl);
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
        //Wipe shopgrid and load the searched cars
        document.getElementById("shopgrid").innerHTML = "";
        cars.forEach(car => {
          carGen.carCard(car,"shopgrid");
        });
      });
});
    





function displayCars(cars,shopgrid) {
    const container = document.getElementById(shopgrid);
    container.innerHTML = ''; // Clear the container


    if (cars.size == 0) {
        const emptyText = document.createElement('p');
        emptyText.textContent = 'Found Nothing Matching The Criteria';
        container.appendChild(emptyText);
    } else {
        cars.forEach(car => {

        });
    }
}

function showFullInfo(car, productContainer) {
    const infoPanel = productContainer.querySelector(".info-panel");
    // Display the info panel
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
    // Set background image for the info panel
    infoPanel.style.backgroundImage = "url('images/Paper.png')";
    infoPanel.style.backgroundSize = "cover"; // Adjust as needed
    infoPanel.style.backgroundPosition = "center"; // Adjust as needed
    infoPanel.style.backgroundRepeat = "no-repeat"; // Adjust as needed
    infoPanel.style.display = "block";
    infoPanel.style.top = productContainer.offsetHeight + "px"; // Position info panel underneath product container
}




function hideFullInfo(infoPanel) {
    // Hide the info panel
    infoPanel.style.display = "none";
}




