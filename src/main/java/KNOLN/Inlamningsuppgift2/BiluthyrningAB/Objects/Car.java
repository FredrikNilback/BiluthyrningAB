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
    @Column(nullable = true)
    private Integer milage;
    @Column(nullable = true)
    private Automatic automatic;
    @Column(nullable = true)
    private Integer carSeats;
    @Column(nullable = true)
    private Integer carYear;
    @Column
    private  EngineType engineType;
    @Column
    private CarType carType;
    @Column(nullable = true)
    private Double pricePerDay;

    public String getLicensePlate() {
        return licensePlate;
    }

    public String getCarName() {
        return carName;
    }

    public CarBrand getCarBrand() {
        return carBrand;
    }

    public Integer getMilage() {return milage;}

    public Automatic isAutomatic() {
        return automatic;
    }

    public Integer getCarSeats() {
        return carSeats;
    }

    public Integer getCarYear() {
        return carYear;
    }

    public EngineType getEngineType() {
        return engineType;
    }

    public CarType getCarType() {
        return carType;
    }

    public Double getPricePerDay() {
        return pricePerDay;
    }


    public Car(String licensePlate, String carName, CarBrand carBrand,
               int milage, Automatic automatic, int carSeats, int carYear,
               EngineType engineType, CarType carType, Double pricePerDay) {


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

    public enum Automatic{
        Automatic, Manual
    }

}
