let cars = [];

cars.push(new Car("XYZ001","XSupraV1","Volkswagen",5000,"Automatic",4, 2012,"Gasoline","SportsCar",205));
cars.push(new Car("XYZ002","XSupraV2","Mercedes",5000,"Automatic",4, 2012,"Gasoline","SportsCar",105));
cars.push(new Car("XYZ003","XSupraV5","Toyota",5000,"Manual",4, 2012,"Gasoline","SportsCar",505));
cars.push(new Car("XYZ004","YUTI5","Stellantis",5000,"Automatic",4, 2012,"Gasoline","SportsCar",75));
cars.push(new Car("XYZ005","XSupraV7","Ford",5000,"Manual",4, 2012,"Diesel","SUV",55));
cars.push(new Car("XYZ006","GGAG1","Volvo",5000,"Automatic",4, 2012,"Gasoline","SportsCar",165));
cars.push(new Car("XYZ007","GALENIV","Bugatti",5000,"Automatic",4, 2012,"Gasoline","SUV",12));
cars.push(new Car("XYZ008","JULMFV9","BMW",5000,"Automatic",4, 2012,"Gasoline","SportsCar",525));
cars.push(new Car("XYZ009","V60","Honda",5000,"Automatic",4, 2012,"Gasoline","SportsCar",24));
cars.push(new Car("XYZ010","JUIV90","Lamborghini",5000,"Automatic",4, 2012,"Gasoline","SportsCar",225));


const carGen = new CarGeneration("main", false);



for(let i in cars){
    const car = cars[i];
    carGen.carCard(car,"productscontainer");
}

let scrollContainer = document.querySelector("#productscontainer");
let leftBtn = document.getElementById("leftBtn");
let rightBtn = document.getElementById("rightBtn");

scrollContainer.addEventListener("wheel",(evt) =>{
    evt.preventDefault();
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= evt.deltaY;
});

rightBtn.addEventListener("click",()=>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 190;
});

leftBtn.addEventListener("click",()=>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 190;
});
