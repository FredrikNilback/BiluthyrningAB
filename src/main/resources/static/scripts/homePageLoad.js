let cars = [];
cars.push(new car(0,"Volkswagen",105,"XYZ123","XSupraV2",9053,"Automatic",4,2012));
cars.push(new car(1,"Toyota",160));
cars.push(new car(2,"Stellantis",120));
cars.push(new car(3,"Mercedes",130));
cars.push(new car(4,"Ford",80));
cars.push(new car(5,"BMW",100));
cars.push(new car(6,"Honda",120));
cars.push(new car(7,"Tesla",130));
cars.push(new car(8,"Lamborghini",155));
cars.push(new car(9,"Lotus",78));

const carGen = new CarGeneration();



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
