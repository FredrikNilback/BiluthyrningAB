package KNOLN.Inlamningsuppgift2.BiluthyrningAB.Cotrollers;

import KNOLN.Inlamningsuppgift2.BiluthyrningAB.Objects.Car;
import KNOLN.Inlamningsuppgift2.BiluthyrningAB.Service.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/searchCars")
public class SearchCarsController extends CarController{

    @Autowired
    private CarService carService;

    @GetMapping("/carName")
    public ResponseEntity<List<Car>> getCarsByCarName(@RequestParam("carName") String carName){
        return ResponseEntity.ok(carService.getCarsByCarName(carName));
    }

    @GetMapping("/carBrand")
    public ResponseEntity<List<Car>> getCarsByCarBrand(@RequestParam("carBrand") Car.CarBrand carBrand){
        return ResponseEntity.ok(carService.getCarsByCarBrand(carBrand));
    }

    @GetMapping("/milage")
    public ResponseEntity<List<Car>> getCarByMilage(@RequestParam("milage") Integer milage){
        return ResponseEntity.ok(carService.getCarsByMilage(milage));
    }

    @GetMapping("/automatic")
    public ResponseEntity<List<Car>> getCarsByAutomatic(@RequestParam("automatic") Car.Automatic automatic){
        return ResponseEntity.ok(carService.getCarsByAutomatic(automatic));
    }

    @GetMapping("/carSeats")
    public ResponseEntity<List<Car>> getCarByCarSeats(@RequestParam("carSeats") Integer carSeats){
        return ResponseEntity.ok(carService.getCarsByCarSeats(carSeats));
    }

    @GetMapping("/engineType")
    public ResponseEntity<List<Car>> getCarsByEnginetype(@RequestParam("engineType") Car.EngineType engineType){
        return ResponseEntity.ok(carService.getCarsByEngineType(engineType));
    }

    @GetMapping("/carType")
    public ResponseEntity<List<Car>> getCarsByCarType(@RequestParam("carType") Car.CarType carType){
        return ResponseEntity.ok(carService.getCarsByCarType(carType));
    }

    @GetMapping("/pricePerDay")
    public ResponseEntity<List<Car>> getCarsByPricePerDay(@RequestParam("pricePerDay") Integer pricePerDay){
        return ResponseEntity.ok(carService.getCarsByPricePerDay(pricePerDay));
    }

    @GetMapping("/searchAllCars")
    public ResponseEntity<List<Car>> searchCars(
            @RequestParam(value = "carName", required = false) String carName,
            @RequestParam(value = "carBrand", required = false) Car.CarBrand carBrand,
            @RequestParam(value = "milage", required = false) Integer milage,
            @RequestParam(value = "automatic", required = false) Car.Automatic automatic,
            @RequestParam(value = "carSeats", required = false) Integer carSeats,
            @RequestParam(value = "carYear", required = false) Integer carYear,
            @RequestParam(value = "engineType", required = false) Car.EngineType engineType,
            @RequestParam(value = "carType", required = false) Car.CarType carType,
            @RequestParam(value = "pricePerDay", required = false) Double pricePerDay) {


        List<Car> filteredCars = new ArrayList<>();

        for (Car car : getAllCars()){
            boolean match = true;

            if(carName != null && !carName.equals(car.getCarName())){
                match = false;
            }
            if(carBrand != null && !carBrand.equals(car.getCarBrand())){
                match = false;
            }
            if(milage != null && !milage.equals(car.getMilage())){
                match = false;
            }
            if(carSeats != null && !carSeats.equals(car.getCarSeats())){
                match = false;
            }
            if(carYear != null && !carYear.equals(car.getCarYear())){
                match = false;
            }
            if(engineType != null && !engineType.equals(car.getEngineType())){
                match = false;
            }
            if(carType != null && !carType.equals(car.getCarType())){
                match = false;
            }
            if(pricePerDay != null && !pricePerDay.equals(car.getPricePerDay())){
                match = false;
            }
            if(automatic != null && !automatic.equals(car.getAutomatic())){
                match = false;
            }

            if (match){
                filteredCars.add(car);
            }
        }
        return new ResponseEntity<>(filteredCars, HttpStatus.OK);
    }
}




