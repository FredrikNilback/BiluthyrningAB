package KNOLN.Inlamningsuppgift2.BiluthyrningAB.Objects;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;


@AllArgsConstructor
@Getter
@Setter
public class Contract {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int contractId;

    @OneToOne(targetEntity = Car.class, cascade = CascadeType.ALL)
    private String licensePlate;

    @OneToOne(targetEntity = User.class, cascade = CascadeType.ALL)
    private String Email;

    @Column
    private LocalDate startDate;

    @Column
    private LocalDate endDate;

    @Column
    private int totalCost;

}
