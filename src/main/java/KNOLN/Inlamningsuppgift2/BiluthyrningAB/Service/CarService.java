package KNOLN.Inlamningsuppgift2.BiluthyrningAB.Service;

import KNOLN.Inlamningsuppgift2.BiluthyrningAB.Objects.Car;
import KNOLN.Inlamningsuppgift2.BiluthyrningAB.Repositories.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Objects;

import static org.antlr.v4.runtime.tree.xpath.XPath.findAll;

@Service
public class CarService {
    @Autowired
    private CarRepository repo;

    public ArrayList<Car> getCarSeats(Integer carSeats){
        return repo.getCarSeats(carSeats);
    }


    public ArrayList<Car> searchCars(String carName, Car.CarBrand carBrand,
                                Integer milage, boolean automatic, Integer carSeats, Integer carYear,
                                Car.EngineType engineType, Car.CarType carType, Double pricePerDay) {
        return repo.searchCar(carName,  carBrand,
                milage,  automatic,  carSeats,  carYear,
                engineType,  carType, pricePerDay);
    }


    private boolean searchByCriteria(Car car, Car carSearch) {
        if (carSearch.getCarName() != null && !car.getCarName().toString().equals(carSearch.getCarName()))
            return false;
        if (carSearch.getCarBrand() != null && !car.getCarBrand().toString().equals(carSearch.getCarBrand().toString()))
            return false;
        if (carSearch.getMilage() != null && car.getMilage() != carSearch.getMilage())
            return false;
        if (car.isAutomatic() != carSearch.isAutomatic())
            return false;
        if (carSearch.getCarSeats() != null && !Objects.equals(car.getCarSeats(), carSearch.getCarSeats()))
            return false;
        if (carSearch.getCarYear() != null && !Objects.equals(car.getCarYear(), carSearch.getCarYear()))
            return false;
        if (carSearch.getEngineType() != null && !car.getEngineType().toString().equals(carSearch.getEngineType()))
            return false;
        if (carSearch.getCarType() != null && !car.getCarType().toString().equals(carSearch.getCarType()))
            return false;
        if (carSearch.getPricePerDay() != null && car.getPricePerDay() != carSearch.getPricePerDay())
            return false;

        return true;
    }

    public  ArrayList<Car> getCars(){
        return (ArrayList<Car>) repo.findAll();
    }






    public void addCar(Car car){
         repo.save(car);
    }
    public void deleteCar(Car car){
        repo.delete(car);
    }

    public Car getCarByBrand(Car.CarBrand carBrand){return repo.findByCarBrand(carBrand);}
    public Car getCarByCarName(String carName){return repo.findByCarName(carName);}
    public Car getCarByCarType(Car.CarType carType){
        return repo.findByCarType(carType);
    }
    public Car getCarByEngineType(Car.EngineType engineType){
        return repo.findByEngineType(engineType);
    }
    public Car getCarByCarYear(int carYear){
        return repo.findByCarYear(carYear);
    }
    public Car getCarByCarSeats(int carSeats){
        return repo.findByCarSeats(carSeats);
    }
    public Car getCarAutomatic(boolean automatic){
        return repo.findByAutomatic(automatic);
    }



}


