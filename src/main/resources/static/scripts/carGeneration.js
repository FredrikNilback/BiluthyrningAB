
class CarGeneration{
    
    constructor()
    {
        this.createFullInfo("main");
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

        let onProductPanel = false;
        const infoPanel = document.getElementById("fullInfoPanel");
        let onInfoPanel = false;

        productContainer.addEventListener("mouseenter",() =>{
            const infoPanel = document.getElementById("fullInfoPanel");
            const parentRect = productContainer.getBoundingClientRect();
            infoPanel.style.top = (parentRect.top+parentRect.height)+"px";
            infoPanel.style.left = (parentRect.left-40)+"px";
            this.showFullInfo(car);
            onProductPanel = true;
            onInfoPanel = false;

            const timeoutID = setTimeout(()=>{
                infoPanel.style.opacity = 1;
            },1)
        });

        productContainer.addEventListener("mouseleave",() =>{
            onProductPanel = false;
            setTimeout(()=>{
                if(onInfoPanel != true){
                    document.getElementById("fullInfoPanel").style.opacity = 0;
                }
            },1);
        });

        infoPanel.addEventListener("mouseenter",()=>{
            onInfoPanel = true;
        })
        infoPanel.addEventListener("mouseleave",()=>{
            onInfoPanel = false;
            setTimeout(()=>{
                if(onProductPanel != true){
                    document.getElementById("fullInfoPanel").style.opacity = 0;
                }
            },1);
        })
    }

    createFullInfo(ParentId){
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

        document.getElementById(ParentId).appendChild(fullInfoPanel);
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
        document.getElementById("infoCarYear").textContent = "Modell År: "+car.getCarYear();
    }
}
