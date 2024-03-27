package KNOLN.Inlamningsuppgift2.BiluthyrningAB.Cotrollers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import KNOLN.Inlamningsuppgift2.BiluthyrningAB.Objects.User;

@Controller
public class UserController {

    @PostMapping("addUser")
    public ResponseEntity<?> addUser(
            @RequestParam("id")String email,
            @RequestParam("password")String password,
            @RequestParam("salt")String salt,
            @RequestParam("userName")String userName,
            @RequestParam("telephoneNumber")String telephoneNumber,
            @RequestParam("address")String address
    ) {
        User user = new User(email, password, salt, userName, telephoneNumber, address);
        return ResponseEntity.status(HttpStatus.CREATED).body("");
    }
}
