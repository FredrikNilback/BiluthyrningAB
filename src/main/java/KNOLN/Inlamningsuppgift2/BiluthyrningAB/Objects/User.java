package KNOLN.Inlamningsuppgift2.BiluthyrningAB.Objects;

import jakarta.persistence.*;

@Entity
@Table(name="User")
public class User {
    @Id
    private String Email;

    @Column
    private String Password;

    @Column
    private String Salt;
}
