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