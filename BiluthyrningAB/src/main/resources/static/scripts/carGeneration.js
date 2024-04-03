let cars = [];
cars.push(new car("Volkswagen",105));
cars.push(new car("Toyota",160));
cars.push(new car("Stellantis",120));
cars.push(new car("Mercedes",130));
cars.push(new car("Ford",80));
cars.push(new car("BMW",100));
cars.push(new car("Honda",120));

const productscontainer = document.getElementById("productdealscontainer");
console.log("I RUN")

for(let i in cars){
    const car = cars[i];

    console.log("I RUN2")
    const productContainer = document.createElement("div");
    document.getElementById("productdealscontainer").appendChild(productContainer);
    productContainer.setAttribute("class","productcontainer");

    //PictureContainer
    const productPictureContainer = document.createElement("div");
    productPictureContainer.setAttribute("class","imgcontainer");
    productContainer.appendChild(productPictureContainer);

    const productPicture = document.createElement("img");
    productPicture.setAttribute("class","carimg");
    productPicture.setAttribute("src","/BiluthyrningAB/src/main/resources/static/images/car" + (i) + ".png");
    productPictureContainer.appendChild(productPicture);



    //ProductInfoContainer
    const productInfoContainer = document.createElement("div");
    productInfoContainer.setAttribute("class","productinfocontainer");
    productContainer.appendChild(productInfoContainer);

    //Model
    const productModel = document.createElement("p");
    productModel.setAttribute("class","productname");
    productModel.textContent = car.getModel();
    productInfoContainer.appendChild(productModel);

    //Price
    const productPrice = document.createElement("p");
    productPrice.setAttribute("class","productprice");
    productPrice.textContent = car.getPrice()+"kr/Dag";
    productInfoContainer.appendChild(productPrice);
}