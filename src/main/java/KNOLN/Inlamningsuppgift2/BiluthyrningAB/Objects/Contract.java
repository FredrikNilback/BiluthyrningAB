package KNOLN.Inlamningsuppgift2.BiluthyrningAB.Objects;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;


@Getter
@Setter
@Entity
@Table(name = "Contracts")
public class Contract {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int contractId;

    @OneToOne(targetEntity = Car.class, cascade = CascadeType.ALL)
    private String licensePlate;

    @OneToOne(targetEntity = User.class, cascade = CascadeType.ALL)
    private String email;

    @Column(nullable = false,name = "Start Date")
    private LocalDate startDate;

    @Column(nullable = false, name = "End Date")
    private LocalDate endDate;

    @Column(nullable = false, name = "Total Cost")
    private int totalCost;

    public Contract(String licensePlate, String email, LocalDate startDate, LocalDate endDate, int totalCost) {
        this.licensePlate = licensePlate;
        this.email = email;
        this.startDate = startDate;
        this.endDate = endDate;
        this.totalCost = totalCost;
    }
}

