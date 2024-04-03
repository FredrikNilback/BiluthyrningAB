class CarGeneration{
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
        productPicture.setAttribute("src","/BiluthyrningAB/src/main/resources/static/images/car" + car.getId() + ".png");
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
}