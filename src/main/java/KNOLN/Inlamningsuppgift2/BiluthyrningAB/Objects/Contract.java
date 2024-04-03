package KNOLN.Inlamningsuppgift2.BiluthyrningAB.Objects;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class Contract {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int contractId;

    private String licensePlate;
    @OneToOne(targetEntity = User.class, cascade = CascadeType.ALL)
    private String Email;


}
