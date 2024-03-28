package KNOLN.Inlamningsuppgift2.BiluthyrningAB.Cotrollers;

import KNOLN.Inlamningsuppgift2.BiluthyrningAB.Objects.Car;
import KNOLN.Inlamningsuppgift2.BiluthyrningAB.Service.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CarController {



    @Autowired
    private CarService carService;
    private List<Car> carList;



    @PostMapping("addCar")
    public String addCar(String licensePlate, String carName, Car.CarBrand carBrand,
                         int milage, boolean automatic, int carSeats, int carYear,
                         Car.EngineType engineType, Car.CarType carType, float pricePerDay){

        Car car = new Car( licensePlate,  carName,  carBrand,
         milage,  automatic,  carSeats,  carYear,
         engineType,  carType, pricePerDay);

        carService.addCar(car);

        return "addCar";

    }

    @GetMapping("/cars")
    public List<Car> getAllCars(){
        return carService.getCars();
    }

}
