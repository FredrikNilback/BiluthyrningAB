function addToCart(carName){
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    let itemIndex = cart.findIndex(item => item.name === carName);
    if(itemIndex > -1) {
        cart[itemIndex].quantity += 1;
    }else{
        cart.push({name: carName, quantity: 1});
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert(carName + "har lagts till i varukorgen");
}