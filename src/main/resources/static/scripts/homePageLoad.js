let cars = [];
//OLDCAR CLASS
//cars.push(new Car(0,"Volkswagen",105,"XYZ001","XSupraV2",9053,"Automatic",4,2012));
//cars.push(new Car(1,"Toyota",160,"XYZ002","XSupraV2",9053,"Automatic",4,2012));
//cars.push(new Car(2,"Stellantis",120,"XYZ003","XSupraV2",9053,"Automatic",4,2012));
//cars.push(new Car(3,"Mercedes",130,"XYZ004","XSupraV2",9053,"Automatic",4,2012));
//cars.push(new Car(4,"Ford",80,"XYZ005","XSupraV2",9053,"Automatic",4,2012));
//cars.push(new Car(5,"BMW",100,"XYZ006","XSupraV2",9053,"Automatic",4,2012));
//cars.push(new Car(6,"Honda",120,"XYZ007","XSupraV2",9053,"Automatic",4,2012));
//cars.push(new Car(7,"Tesla",130,"XYZ008","XSupraV2",9053,"Automatic",4,2012));
//cars.push(new Car(8,"Lamborghini",155,"XYZ009","XSupraV2",9053,"Automatic",4,2012));
//cars.push(new Car(9,"Lotus",78,"XYZ010","XSupraV2",9053,"Automatic",4,2012));

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


const carGen = new CarGeneration("main");



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
