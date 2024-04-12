package KNOLN.Inlamningsuppgift2.BiluthyrningAB.Controllers;

import KNOLN.Inlamningsuppgift2.BiluthyrningAB.Objects.Car;
import KNOLN.Inlamningsuppgift2.BiluthyrningAB.Objects.Contract;
import KNOLN.Inlamningsuppgift2.BiluthyrningAB.Service.CarService;
import KNOLN.Inlamningsuppgift2.BiluthyrningAB.Service.ContractService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Repository;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.*;


@Controller
public class SearchCarsController{



    @Autowired
    private CarService carService;
    @Autowired
    private ContractService contractService;


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



    //Här är funktionen som används då man vill söka igenom bilar genom att använda sig av alla kriterierna.
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





        Map<String, Object> queryParams = new HashMap<>();

        if (carName != null && !carName.isEmpty()) {
            queryParams.put("carName", carName);
        }
        if (carBrand != null) {
            queryParams.put("carBrand", carBrand);
        }
        if (milage != null) {
            queryParams.put("milage", milage);
        }
        if (automatic != null) {
            queryParams.put("automatic", automatic);
        }
        if (carSeats != null) {
            queryParams.put("carSeats", carSeats);
        }
        if (carYear != null) {
            queryParams.put("carYear", carYear);
        }
        if (engineType != null) {
            queryParams.put("engineType", engineType);
        }
        if (carType != null) {
            queryParams.put("carType", carType);
        }
        if (pricePerDay != null) {
            queryParams.put("pricePerDay", pricePerDay);
        }


        //Loopar igenom alla billar i databasen som hämtas via getAllCars(). Lägger in en boolean match
        // som är true i början av loopen. Logiken bakom är för om vi söker efter bilar utan att fylla i några
        //kriterier (alltså att värdena är null) så ska man få med hela listan.

        for (Car car : carService.getCars()) {
            boolean match = true;

            if (carName != null && !car.getCarName().toLowerCase().contains(carName.toLowerCase())) {
                match = false;
            }
            if (carBrand != null && !carBrand.equals(car.getCarBrand())) {
                match = false;
            }
            if (milage != null && milage > car.getMilage()) {
                match = false;
            }
            if (carSeats != null && !carSeats.equals(car.getCarSeats())) {
                match = false;
            }
            if (carYear != null && !carYear.equals(car.getCarYear())) {
                match = false;
            }
            if (engineType != null && !engineType.equals(car.getEngineType())) {
                match = false;
            }
            if (carType != null && !carType.equals(car.getCarType())) {
                match = false;
            }
            if (pricePerDay != null && pricePerDay > car.getPricePerDay()) {
                match = false;
            }
            if (automatic != null && !automatic.equals(car.getAutomatic())) {
                match = false;
            }

            if (match) {
                filteredCars.add(car);
            }

            }

        return new ResponseEntity<>(filteredCars, HttpStatus.OK);
    }


    @GetMapping("/searchCars")
    public String showSearchPage(Model model) {
        return "searchCars";
    }

    @GetMapping("getAllContracts")
    ResponseEntity<List<Contract>> getAllContracts(Model model){
        List<Contract> contracts = contractService.getAllContracts();
        model.addAttribute("contracts", contracts);
        return ResponseEntity.ok(contracts);
    }


 }

