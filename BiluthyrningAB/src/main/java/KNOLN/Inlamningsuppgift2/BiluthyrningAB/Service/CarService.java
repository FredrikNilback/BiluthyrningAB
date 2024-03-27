package KNOLN.Inlamningsuppgift2.BiluthyrningAB.Service;

import KNOLN.Inlamningsuppgift2.BiluthyrningAB.Objects.Car;
import KNOLN.Inlamningsuppgift2.BiluthyrningAB.Repositories.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CarService {
    @Autowired
    private CarRepository repo;



    public Car addCar(Car car){
        return repo.save(car);
    }
    public void deleteCar(Car car){
        repo.delete(car);
    }
    public Car getCarByLicensePlate(String licensePlate){
        return repo.findByLicensePlate(licensePlate);
    }

}


