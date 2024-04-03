package KNOLN.Inlamningsuppgift2.BiluthyrningAB.Repositories;


import KNOLN.Inlamningsuppgift2.BiluthyrningAB.Objects.Car;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CarRepository extends JpaRepository <Car, Long> {
    Car findByCarBrand(Car.CarBrand carBrand);
    Car findByCarName(String carName);
    Car findByCarType(Car.CarType carType);
    Car findByEngineType(Car.EngineType engineType);
    Car findByCarYear(int carYear);
    Car findByCarSeats(int carSeats);
    Car findByAutomatic(boolean automatic);


}
