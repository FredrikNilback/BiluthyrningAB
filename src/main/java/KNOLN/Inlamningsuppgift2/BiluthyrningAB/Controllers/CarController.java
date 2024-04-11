package KNOLN.Inlamningsuppgift2.BiluthyrningAB.Controllers;

import KNOLN.Inlamningsuppgift2.BiluthyrningAB.Objects.Car;
import KNOLN.Inlamningsuppgift2.BiluthyrningAB.Service.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class CarController {

    @Autowired
    private CarService carService;
    private List<Car> carList;



    @PutMapping("deleteCar")
    public String deleteCar(Car car){
        carService.deleteCar(car);
        return "deleteCar";
    }


    @PostMapping("addCar")
    public String addCar(String licensePlate, String carName, Car.CarBrand carBrand,
                         int milage, Car.Automatic automatic, int carSeats, int carYear,
                         Car.EngineType engineType, Car.CarType carType, Double pricePerDay){

        Car car = new Car();
        car.setLicensePlate(licensePlate); // Set licensePlate
        car.setCarName(carName);
        car.setCarBrand(carBrand);
        car.setMilage(milage);
        car.setAutomatic(automatic);
        car.setCarSeats(carSeats);
        car.setCarYear(carYear);
        car.setEngineType(engineType);
        car.setCarType(carType);
        car.setPricePerDay(pricePerDay);

        carService.addCar(car);

        return "addCar";
    }
    @GetMapping("carList")
    public ArrayList<Car> getAllCars(){
        return carService.getCars();
    }


}

