package KNOLN.Inlamningsuppgift2.BiluthyrningAB.Repositories;


import KNOLN.Inlamningsuppgift2.BiluthyrningAB.Objects.Car;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface CarRepository extends JpaRepository <Car, String> {

    /*
    @Query(value = "SELECT car FROM Car car WHERE car_seats = ?1")
            public ArrayList<Car> getCarSeats(Integer carSeats);
*/
    @Query("SELECT c FROM Car c WHERE c.carSeats = :seats")
    public ArrayList<Car> getCarSeats(@Param("seats") int seats);

    @Query("SELECT car FROM Car car WHERE (:carName IS NULL OR car.carName = :carName) " +
            "AND (:carBrand IS NULL OR car.carBrand = :carBrand) " +
            "AND (:milage IS NULL OR car.milage = :milage) " +
            "AND (:automatic IS NULL OR car.automatic = :automatic) " +
            "AND (:carSeats IS NULL OR car.carSeats = :carSeats) " +
            "AND (:carYear IS NULL OR car.carYear = :carYear) " +
            "AND (:engineType IS NULL OR car.engineType = :engineType) " +
            "AND (:carType IS NULL OR car.carType = :carType) " +
            "AND (:pricePerDay IS NULL OR car.pricePerDay = :pricePerDay) ")
    ArrayList<Car> searchCar(@Param("carName") String carName,
                            @Param("carBrand") Car.CarBrand carBrand,
                            @Param("milage") Integer milage,
                            @Param("automatic") boolean automatic,
                            @Param("carSeats") Integer carSeats,
                            @Param("carYear") Integer carYear,
                            @Param("engineType") Car.EngineType engineType,
                            @Param("carType") Car.CarType carType,
                            @Param("pricePerDay") Double pricePerDay);


    Car findByCarBrand(Car.CarBrand carBrand);
    Car findByCarName(String carName);
    Car findByCarType(Car.CarType carType);
    Car findByEngineType(Car.EngineType engineType);
    Car findByCarYear(int carYear);
    Car findByCarSeats(int carSeats);
    Car findByAutomatic(boolean automatic);


}
