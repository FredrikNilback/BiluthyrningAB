package KNOLN.Inlamningsuppgift2.BiluthyrningAB.Cotrollers;

import KNOLN.Inlamningsuppgift2.BiluthyrningAB.Objects.Car;
import KNOLN.Inlamningsuppgift2.BiluthyrningAB.Objects.Contract;
import KNOLN.Inlamningsuppgift2.BiluthyrningAB.Objects.ReqContract;
import KNOLN.Inlamningsuppgift2.BiluthyrningAB.Objects.User;
import KNOLN.Inlamningsuppgift2.BiluthyrningAB.Service.CarService;
import KNOLN.Inlamningsuppgift2.BiluthyrningAB.Service.ContractService;
import KNOLN.Inlamningsuppgift2.BiluthyrningAB.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/Contract")
public class ContractController {

    @Autowired
    private ContractService contractService;

    @Autowired
    private UserService userService;

    @Autowired
    private CarService carService;

    @PostMapping("addContract")
    public ResponseEntity<Contract> addContract(@RequestBody ReqContract reqContract) {

        User user = userService.getUserByEmail(reqContract.getEmail());
        if (user == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND); // User not found
        }

        Car car = carService.getCarByLicensePlate(reqContract.getLicensePlate());
        if (car == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND); // Car not found
        }

        Contract newContract = new Contract();
        newContract.setUser(user);
        newContract.setCar(car);
        newContract.setStartDate(reqContract.getStartDate());
        newContract.setEndDate(reqContract.getEndDate());

        long timeDiff = reqContract.getEndDate().getTime() - reqContract.getStartDate().getTime();
        int daysDiff = (int)(timeDiff / (1000 * 60 * 60 * 24));

        double totalCost = (car.getPricePerDay().intValue() * daysDiff);
        newContract.setTotalCost(totalCost);

        // Add the new contract
        Contract savedContract = contractService.addContract(newContract);

        // Return ResponseEntity with the newly created contract and status code
        return new ResponseEntity<>(savedContract, HttpStatus.CREATED);
    }

}
