const searchForm = document.getElementById('searchForm');
const carGen = new CarGeneration("page-layout", true);
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
    let searchedCars = [];

    const newUrl = `http://localhost:8080/searchAllCars?${newParamsString}`;
    fetch(newUrl)
      .then(response => response.json())
      .then(data => {
        searchedCars = data.map(carData => {
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
        
        // See if date matches
        const startDate = new Date(document.getElementById('startDate').value.trim());
        const endDate = new Date(document.getElementById('endDate').value.trim());

        const datedCars = [];
        fetch(`http://localhost:8080/getAllContracts`)
          .then(response => response.json())
          .then(data => {
            const contracts = data.map(contractData => {
              return new Contract(contractData.car, contractData.startDate, contractData.endDate);
            });

            calculateAvailableCars(searchedCars, contracts, startDate, endDate, datedCars);

            // Wipe shopgrid and load the searched cars
            if(startDate.getTime() > endDate.getTime()){
                alert("Upphämtningsdatum kan inte vara efter Inlämningsdatum!");
            }else{
                document.getElementById("shopgrid").innerHTML = "";
                datedCars.forEach(car => {
                    carGen.carCard(car, "shopgrid");
                });
            }
          })
          .catch(error => {
            console.error('Error fetching contracts data:', error);
          });
    });
});

function calculateAvailableCars(carList, contracts, startDate, endDate, carListOutput) 
{
    for (let i in carList) {
        let car = carList[i];
        let available = true;
        for (let j in contracts) {
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
            carListOutput.push(car);
        }
    }
};