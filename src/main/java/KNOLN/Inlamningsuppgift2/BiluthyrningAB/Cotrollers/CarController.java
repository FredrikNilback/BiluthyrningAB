package KNOLN.Inlamningsuppgift2.BiluthyrningAB.Cotrollers;

import KNOLN.Inlamningsuppgift2.BiluthyrningAB.Objects.Car;
import KNOLN.Inlamningsuppgift2.BiluthyrningAB.Service.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/cars")
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

        Car car = new Car( licensePlate,  carName,  carBrand,
         milage,  automatic,  carSeats,  carYear,
         engineType,  carType, pricePerDay);

        carService.addCar(car);

        return "addCar";

    }

    @GetMapping("carList")
    public ArrayList<Car> getAllCars(){
        return carService.getCars();
    }


}

