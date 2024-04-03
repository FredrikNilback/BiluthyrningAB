package KNOLN.Inlamningsuppgift2.BiluthyrningAB.Objects;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name="Car")
public class Car {

    @Id
    private String licensePlate;
    @Column(nullable = false, unique = false, name = "model")
    private String carName;
    @Column(nullable = false, unique = true, name = "brand")
    private CarBrand carBrand;
    @Column(nullable = false, unique = false, name="milage")
    private int milage;
    @Column(nullable = false, unique = false, name="automatic")
    private boolean automatic;
    @Column(nullable = false, unique = false, name ="seat")
    private int carSeats;
    @Column(nullable = false, unique = false, name="year")
    private int carYear;
    @Column(nullable = false, unique = true, name = "engine")
    private  EngineType engineType;
    @Column(nullable = false, unique = true, name = "type")
    private CarType carType;
    @Column(nullable = false, unique = false, name = "price_per_day")
    private float pricePerDay;


    public Car(String licensePlate, String carName, CarBrand carBrand,
               int milage, boolean automatic, int carSeats, int carYear,
               EngineType engineType, CarType carType, float pricePerDay) {
        this.licensePlate = licensePlate;
        this.carName = carName;
        this.carBrand = carBrand;
        this.milage = milage;
        this.automatic = automatic;
        this.carSeats = carSeats;
        this.carYear = carYear;
        this.engineType = engineType;
        this.carType = carType;
        this.pricePerDay = pricePerDay;
    }


    // Alla Enum funktioner, lägg in element pö on pö.
    public enum EngineType{
        Bensin, Diesel, Electric
    }
    public enum CarBrand{

    }
    public enum CarType{

    }

}
