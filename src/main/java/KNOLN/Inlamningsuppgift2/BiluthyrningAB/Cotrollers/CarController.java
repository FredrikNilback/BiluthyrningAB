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
                         int milage, boolean automatic, int carSeats, int carYear,
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
/*
    @GetMapping("/search")
    public ResponseEntity<ArrayList<Car>>getCarSeats(Integer carSeats){
        return ResponseEntity.ok(carService.getCarSeats(carSeats));
    }

*/
@GetMapping("/search")
public ResponseEntity<ArrayList<Car>> searchCars(
        @RequestParam(value = "carName", required = false) String carName,
        @RequestParam(value = "carBrand", required = false) Car.CarBrand carBrand,
        @RequestParam(value = "milage", required = false) Integer milage,
        @RequestParam(value = "automatic", required = false) boolean automatic,
        @RequestParam(value = "carSeats", required = false) Integer carSeats,
        @RequestParam(value = "carYear", required = false) Integer carYear,
        @RequestParam(value = "engineType", required = false) Car.EngineType engineType,
        @RequestParam(value = "carType", required = false) Car.CarType carType,
        @RequestParam(value = "pricePerDay", required = false) Double pricePerDay) {


        // Create a searchCriteria object based on the provided parameters
        Car searchCriteria = new Car();
        searchCriteria.setCarName(carName);
        searchCriteria.setCarBrand(carBrand);
        searchCriteria.setMilage(milage);
        searchCriteria.setAutomatic(automatic);
        searchCriteria.setCarSeats(carSeats);
        searchCriteria.setCarYear(carYear);
        searchCriteria.setEngineType(engineType);
        searchCriteria.setCarType(carType);
        searchCriteria.setPricePerDay(pricePerDay);
        // Set other parameters similarly


        ArrayList<Car> filteredCars = carService.searchCars(
                searchCriteria.getCarName(),
                searchCriteria.getCarBrand(),
                searchCriteria.getMilage(),
                searchCriteria.isAutomatic(),
                searchCriteria.getCarSeats(),
                searchCriteria.getCarYear(),
                searchCriteria.getEngineType(),
                searchCriteria.getCarType(),
                searchCriteria.getPricePerDay());
        return ResponseEntity.ok(filteredCars);
    }


}

