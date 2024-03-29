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

    private String saltMaker(){
        Random random = new Random();
        char[] saltChars = new char[5];
        for (int i = 0; i < 5; ++i) {
            saltChars[i] = (char)(random.nextInt(126 - 32 + 1) + 32);
        }
        String salt = new String(saltChars);

        return salt;
    }

    public static String hashPassword(String password) {
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
