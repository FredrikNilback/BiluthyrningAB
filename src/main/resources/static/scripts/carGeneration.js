
class CarGeneration{
    
    constructor()
    {
        this.createFullInfo();
        console.log("I run constructor")
    }
    carCard(car,locDivParentId)
    {
        const productContainer = document.createElement("div");
        document.getElementById(locDivParentId).appendChild(productContainer);
        productContainer.setAttribute("class","productcontainer");

        //PictureContainer
        const productPictureContainer = document.createElement("div");
        productPictureContainer.setAttribute("class","imgcontainer");
        productContainer.appendChild(productPictureContainer);

        //Picture
        const productPicture = document.createElement("img");
        productPicture.setAttribute("class","carimg");
        productPicture.setAttribute("src","/src/main/resources/static/images/car" + car.getId() + ".png");
        productPictureContainer.appendChild(productPicture);



        //ProductInfoContainer
        const productInfoContainer = document.createElement("div");
        productInfoContainer.setAttribute("class","productinfocontainer");
        productContainer.appendChild(productInfoContainer);

        //Model
        const productModel = document.createElement("p");
        productModel.setAttribute("class","productname");
        productModel.textContent = car.getCarBrand();
        productInfoContainer.appendChild(productModel);

        //Price
        const productPrice = document.createElement("p");
        productPrice.setAttribute("class","productprice");
        productPrice.textContent = car.getPrice()+"kr/Dag";
        productInfoContainer.appendChild(productPrice);

        productContainer.addEventListener("mouseenter",(event) =>{
            const infoPanel = document.getElementById("fullInfoPanel");
            infoPanel.style.opacity = 1;
            this.showFullInfo(car);
            console.log("Entered Div");
        });

        productContainer.addEventListener("mouseleave",() =>{
            
            document.getElementById("fullInfoPanel").style.opacity = 0;
            console.log("Left Div");
        });
    }

    createFullInfo(){
        const fullInfoPanel = document.createElement("div");
        fullInfoPanel.setAttribute("id","fullInfoPanel");
        const id = document.createElement("p");
        id.setAttribute("id","infoId");
        const carBrand = document.createElement("p");
        carBrand.setAttribute("id","infoCarBrand");
        const price = document.createElement("p");
        price.setAttribute("id","infoPrice");
        const licensePlate = document.createElement("p");
        licensePlate.setAttribute("id","infoLicensePlate");
        const model = document.createElement("p");
        model.setAttribute("id","infoModel");
        const milage = document.createElement("p");
        milage.setAttribute("id","infoMilage");
        const automatic = document.createElement("p");
        automatic.setAttribute("id","infoAutomatic");
        const carSeats = document.createElement("p");
        carSeats.setAttribute("id","infoCarSeats");
        const carYear = document.createElement("p");
        carYear.setAttribute("id","infoCarYear");

        document.getElementById("main").appendChild(fullInfoPanel);
        fullInfoPanel.appendChild(id);
        fullInfoPanel.appendChild(carBrand);
        fullInfoPanel.appendChild(model);
        fullInfoPanel.appendChild(carYear);
        fullInfoPanel.appendChild(carSeats);
        fullInfoPanel.appendChild(licensePlate);
        fullInfoPanel.appendChild(milage);
        fullInfoPanel.appendChild(automatic);
        fullInfoPanel.appendChild(price);
    }

    showFullInfo(car){
        document.getElementById("infoId").textContent = "Id: "+car.getId();
        document.getElementById("infoCarBrand").textContent = "Märke: "+car.getCarBrand();
        document.getElementById("infoPrice").textContent = "Pris: "+car.getPrice()+"kr/Dag";
        document.getElementById("infoLicensePlate").textContent = "RegNr: "+car.getLicensePlate();
        document.getElementById("infoModel").textContent = "Modell: "+car.getModel();
        document.getElementById("infoMilage").textContent = "Miltal: "+car.getMilage();
        document.getElementById("infoAutomatic").textContent = "Växellåda: "+car.getAutomatic();
        document.getElementById("infoCarSeats").textContent = "Säten: "+car.getCarSeats();
        document.getElementById("infoCarYear").textContent = "ModellÅr: "+car.getCarYear();
    }
}
