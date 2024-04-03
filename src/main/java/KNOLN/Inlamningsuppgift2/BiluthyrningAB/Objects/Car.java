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
    @Column
    private String carName;
    @Column
    private CarBrand carBrand;
    @Column
    private int milage;
    @Column
    private boolean automatic;
    @Column
    private int carSeats;
    @Column(nullable = false)
    private int carYear;
    @Column
    private  EngineType engineType;
    @Column
    private CarType carType;
    @Column
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

    public Car(){

    }

    // Alla Enum funktioner, lägg in element pö on pö.
    public enum EngineType{
        Bensin, Diesel, Electric
    }
    public enum CarBrand{
        Volvo
    }
    public enum CarType{
        Combi
    }

}
