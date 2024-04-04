function displayCart(){
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartItemsContainer = document.getElementById("cart-items");
    
    cartItemsContainer.innerHTML = "";

    if(cart.length === 0) {

        cartItemsContainer.innerHTML = "<p>Din varukorg är tom.</p>";
    }else{
        cart.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = `${item.name} (Antal: ${item.quantity})`;

        const removeButton = document.createElement("button");
        removeButton.textContent = "Ta bort";
        removeButton.onclick = function(){removeFromCart(index); };

        li.appendChild(removeButton);
        cartItemsContainer.appendChild(li);
    });
  }
}

function removeFromCart(index){
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    if(cart[index].quantity > 1){
        cart[index].quantity -= 1;
    }else{
        cart.splice(index,1);
    }
    
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

window.addEventListener("load", displayCart);