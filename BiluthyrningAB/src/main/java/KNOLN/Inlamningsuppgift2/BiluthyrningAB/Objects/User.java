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
    @Column
    private String UserName;
    @Column
    private String TelephoneNumber;
    @Column
    private String Address;

    public User(String Email, String Password, String Salt, String UserName, String TelephoneNumber, String Address) {
        this.Email = Email;
        this.Password = Password;
        this.Salt = Salt;
        this.UserName = UserName;
        this.TelephoneNumber = TelephoneNumber;
        this.Address = Address;
    }

}
