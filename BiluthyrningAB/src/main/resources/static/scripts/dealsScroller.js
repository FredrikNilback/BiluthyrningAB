const container = document.querySelector("productdealscontainer");
    const scrollLeftBtn = document.getElementById("scrollLeftBtn");
    const scrollRightBtn = document.getElementById("scrollRightBtn");


    scrollLeftBtn.addEventListener("click", function() {
        scrollLeftBtn.setAttribute("background-color","red");
        container.scrollBy({
            left: -200,
            behavior: 'smooth'
        });
    });
    
    scrollRightBtn.addEventListener("click", function() {
        container.scrollBy({
            left: 200,
            behavior: 'smooth'
        });
    });