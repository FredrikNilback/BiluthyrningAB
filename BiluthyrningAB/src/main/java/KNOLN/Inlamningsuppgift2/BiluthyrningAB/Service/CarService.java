package KNOLN.Inlamningsuppgift2.BiluthyrningAB.Service;

import KNOLN.Inlamningsuppgift2.BiluthyrningAB.Objects.Car;
import KNOLN.Inlamningsuppgift2.BiluthyrningAB.Repositories.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarService {
    @Autowired
    private CarRepository repo;



    public void addCar(Car car){
         repo.save(car);
    }
    public void deleteCar(Car car){
        repo.delete(car);
    }
    public Car getCarByLicensePlate(String licensePlate){
        return repo.findByLicensePlate(licensePlate);
    }

    public  List<Car> getCars(){
        return repo.findAll();
    }

}


