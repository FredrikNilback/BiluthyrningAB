class car{
    
    constructor(id,carBrand,price,licensePlate,model,milage,automatic,carSeats,carYear){
        this.id = id;
        this.carBrand = carBrand;
        this.price = price;
        this.licensePlate = licensePlate;
        this.model = model;
        this.milage = milage;
        this.automatic = automatic;
        this.carSeats = carSeats;
        this.carYear = carYear;
    }
    
    getId(){
        return this.id;
    }
    getCarBrand(){
        return this.carBrand;
    }
    getPrice(){
        return this.price;
    }

    getLicensePlate(){
        return this.licensePlate;
    }
    getModel(){
        return this.model;
    }
    getMilage(){
        return this.milage;
    }
    getAutomatic(){
        return this.automatic;
    }
    getCarSeats(){
        return this.carSeats;
    }
    getCarYear(){
        return this.carYear;
    }
}