class car{
    constructor(id,model,price){
        this.id = id;
        this.model = model;
        this.price = price;
    }
    
    getId(){
        return this.id;
    }

    getModel(){
        return this.model;
    }

    getPrice(){
        return this.price;
    }
}