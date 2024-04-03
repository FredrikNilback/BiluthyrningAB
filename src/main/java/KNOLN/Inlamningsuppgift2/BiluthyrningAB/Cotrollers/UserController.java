package KNOLN.Inlamningsuppgift2.BiluthyrningAB.Cotrollers;

import KNOLN.Inlamningsuppgift2.BiluthyrningAB.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import KNOLN.Inlamningsuppgift2.BiluthyrningAB.Objects.User;

@RestController
@RequestMapping("users")
public class UserController {

    @Autowired
    private UserService userService;
    @PostMapping("addUser")
    public ResponseEntity<User> addUser(String email, String password, String salt,
                                        String name, String telephoneNumber, String address) {
        User user = new User(email, password, salt, name, telephoneNumber, address);
        User savedUser = userService.addUser(user);
        return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
    }

}
