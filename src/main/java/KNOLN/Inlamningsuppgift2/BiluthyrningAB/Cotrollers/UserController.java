package KNOLN.Inlamningsuppgift2.BiluthyrningAB.Cotrollers;

import KNOLN.Inlamningsuppgift2.BiluthyrningAB.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import KNOLN.Inlamningsuppgift2.BiluthyrningAB.Objects.User;
import java.util.Random;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Arrays;

@RestController
@RequestMapping("users")
public class UserController {

    @Autowired
    private UserService userService;
    @PostMapping("addUser")
    public ResponseEntity<User> addUser(String email, String password,
                                        String name, String telephoneNumber, String address) {

        String salt = saltMaker();
        String combinedPassword = (password + salt);
        String hashedPassword = hashPassword(combinedPassword);
        User user = new User(email, hashedPassword, salt, name, telephoneNumber, address);
        User savedUser = userService.addUser(user);
        return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
    }

    @PostMapping("loginUser")
    public ResponseEntity<String> loginUser(String email, String password) {
        User user = userService.getUserByEmail(email);
        if (user == null) {
            return new ResponseEntity<>("User not found.", HttpStatus.NOT_FOUND);
        }

        String combinedPassword = password + user.getSalt();
        String hashedPassword = hashPassword(combinedPassword);

        if (hashedPassword.equals(user.getPassword())) {
            return new ResponseEntity<>(("Login successful. \nWelcome back " + user.getUserName() + "!"), HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Incorrect password.", HttpStatus.UNAUTHORIZED);
        }
    }

    @PutMapping("updateUserName")
    public ResponseEntity<User> updateUserName(String email, String newUserName) {
        User updatedUser = userService.updateUserUserName(email, newUserName);
        if (updatedUser != null) {
            return new ResponseEntity<>(updatedUser, HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("updateAddress")
    public ResponseEntity<User> updateAddress(String email, String newAddress) {
        User updatedUser = userService.updateUserAddress(email, newAddress);
        if (updatedUser != null) {
            return new ResponseEntity<>(updatedUser, HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("updateTelephoneNumber")
    public ResponseEntity<User> updateTelephoneNumber(String email, String newTelephoneNumber) {
        User updatedUser = userService.updateUserTelephoneNumber(email, newTelephoneNumber);
        if (updatedUser != null) {
            return new ResponseEntity<>(updatedUser, HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("updatePassword")
    public ResponseEntity<User> updatePassword(String email, String newPassword) {
        String newSalt = saltMaker();
        User updatedUser = userService.updateUserSalt(email, newSalt);

        if (updatedUser != null) {
            String newHashedPassword = hashPassword(newPassword + newSalt);
            updatedUser.setPassword(newHashedPassword);
            updatedUser = userService.addUser(updatedUser);

            return new ResponseEntity<>(updatedUser, HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    private String saltMaker(){
        Random random = new Random();
        char[] saltChars = new char[5];
        for (int i = 0; i < 5; ++i) {
            saltChars[i] = (char)(random.nextInt(126 - 32 + 1) + 32);
        }

        return new String(saltChars);
    }

    private static String hashPassword(String password) {
        try {
            MessageDigest md = MessageDigest.getInstance("SHA-256");

            md.update(password.getBytes());
            byte[] hashedBytes = md.digest();

            StringBuilder stringBuilder = new StringBuilder();
            for (byte b : hashedBytes) {
                stringBuilder.append(String.format("%02x", b));
            }
            return stringBuilder.toString();
        }
        catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
            return null;
        }
    }

}
