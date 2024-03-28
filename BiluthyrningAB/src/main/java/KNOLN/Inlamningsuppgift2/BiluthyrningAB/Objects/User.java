package KNOLN.Inlamningsuppgift2.BiluthyrningAB.Objects;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name="User")
public class User {
    @Id
    private String email;
    @Column
    private String password;
    @Column
    private String salt;
    @Column
    private String userName;
    @Column
    private String telephoneNumber;
    @Column
    private String address;

    public User(String email, String password, String salt, String userName, String telephoneNumber, String address) {
        this.email = email;
        this.password = password;
        this.salt = salt;
        this.userName = userName;
        this.telephoneNumber = telephoneNumber;
        this.address = address;
    }

    public User(){

    }

}
