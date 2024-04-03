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
    @Column
    private boolean automatic;
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

    public Integer getMilage() {
        return milage;
    }

    public boolean isAutomatic() {
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

    public void setLicensePlate(String licensePlate) {
        this.licensePlate = licensePlate;
    }

    public void setCarName(String carName) {
        this.carName = carName;
    }

    public void setCarBrand(CarBrand carBrand) {
        this.carBrand = carBrand;
    }

    public void setMilage(Integer milage) {
        this.milage = milage;
    }

    public void setAutomatic(boolean automatic) {
        this.automatic = automatic;
    }

    public void setCarSeats(Integer carSeats) {
        this.carSeats = carSeats;
    }

    public void setCarYear(Integer carYear) {
        this.carYear = carYear;
    }

    public void setEngineType(EngineType engineType) {
        this.engineType = engineType;
    }

    public void setCarType(CarType carType) {
        this.carType = carType;
    }

    public void setPricePerDay(Double pricePerDay) {
        this.pricePerDay = pricePerDay;
    }

    public Car(String licensePlate, String carName, CarBrand carBrand,
               int milage, boolean automatic, int carSeats, int carYear,
               EngineType engineType, CarType carType, Double pricePerDay) {
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
