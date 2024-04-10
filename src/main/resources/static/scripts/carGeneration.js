
class CarGeneration{
    
    constructor(infoPanelParentID)
    {
        this.createFullInfo(infoPanelParentID);
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
        productPicture.setAttribute("src","images/car" + car.getLicensePlate() + ".png");
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
        productPrice.textContent = car.getPricePerDay()+"kr/Dag";
        productInfoContainer.appendChild(productPrice);

        let onProductPanel = false;
        const infoPanel = document.getElementById("fullInfoPanel");
        let onInfoPanel = false;

        productContainer.addEventListener("mouseenter",() =>{
            const infoPanel = document.getElementById("fullInfoPanel");
            const parentRect = productContainer.getBoundingClientRect();
            const adjustedTop = parentRect.top + window.scrollY;
            infoPanel.style.top = (adjustedTop+parentRect.height-20)+"px";
            infoPanel.style.left = (parentRect.left-66)+"px";
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

        fullInfoPanel.appendChild(carBrand);
        fullInfoPanel.appendChild(model);
        fullInfoPanel.appendChild(carYear);
        fullInfoPanel.appendChild(carSeats);
        fullInfoPanel.appendChild(licensePlate);
        fullInfoPanel.appendChild(milage);
        fullInfoPanel.appendChild(automatic);
        fullInfoPanel.appendChild(price);

        //Kolla ifall man är inloggad Kanske? Isåfall se köp knappar
        //Buy Container
        const rentContainer = document.createElement("div");
        fullInfoPanel.appendChild(rentContainer);
        rentContainer.style.display = "flex";
        rentContainer.style.flexDirection = "row";
        rentContainer.style.justifyContent = "space-between";

        //StartDate input
        const startDateDiv = document.createElement("div");
        rentContainer.appendChild(startDateDiv);

        const startDateLabel = document.createElement("p");
        startDateLabel.textContent = "Uthämtnings Datum";
        startDateDiv.appendChild(startDateLabel);
        startDateLabel.setAttribute("class","datelabel");

        const startDateInput = document.createElement("input");
        startDateInput.setAttribute("type","date");
        startDateInput.setAttribute("name","startdate");
        startDateInput.setAttribute("id","startdate");
        startDateDiv.appendChild(startDateInput);
        startDateInput.style.backgroundColor = "beige";

        //EndDate input
        const endDateDiv = document.createElement("div");
        rentContainer.appendChild(endDateDiv);

        const endDateLabel = document.createElement("p");
        endDateLabel.textContent = "Slut Datum";
        endDateDiv.appendChild(endDateLabel);
        endDateLabel.setAttribute("class","datelabel");

        const endDateInput = document.createElement("input");
        endDateInput.setAttribute("type","date");
        endDateInput.setAttribute("name","enddate");
        endDateInput.setAttribute("id","enddate");
        endDateDiv.appendChild(endDateInput);
        endDateInput.style.backgroundColor = "beige";
        

        const rentButton = document.createElement("input");
        fullInfoPanel.appendChild(rentButton);
        rentButton.setAttribute("type","button");
        rentButton.setAttribute("value","Hyr!");
        rentButton.style.padding="3px 14px";
        rentButton.style.display="block";
        rentButton.style.margin="10px auto";
        rentButton.style.backgroundColor = "beige";
    }

    showFullInfo(car){

        document.getElementById("infoCarBrand").textContent = "Märke: "+car.getCarBrand();
        document.getElementById("infoPrice").textContent = "Pris: "+car.getPricePerDay()+"kr/Dag";
        document.getElementById("infoLicensePlate").textContent = "RegNr: "+car.getLicensePlate();
        document.getElementById("infoModel").textContent = "Modell: "+car.getCarName();
        document.getElementById("infoMilage").textContent = "Miltal: "+car.getMilage();
        document.getElementById("infoAutomatic").textContent = "Växellåda: "+car.getAutomatic();
        document.getElementById("infoCarSeats").textContent = "Säten: "+car.getCarSeats();
        document.getElementById("infoCarYear").textContent = "Modell År: "+car.getCarYear();
    }
}
