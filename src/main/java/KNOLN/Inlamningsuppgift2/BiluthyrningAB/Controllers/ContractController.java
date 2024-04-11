package KNOLN.Inlamningsuppgift2.BiluthyrningAB.Controllers;

import KNOLN.Inlamningsuppgift2.BiluthyrningAB.Objects.Car;
import KNOLN.Inlamningsuppgift2.BiluthyrningAB.Objects.Contract;
import KNOLN.Inlamningsuppgift2.BiluthyrningAB.Objects.User;
import KNOLN.Inlamningsuppgift2.BiluthyrningAB.Service.ContractService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/Contract")
public class ContractController {

    @Autowired
    private ContractService contractService;
    private List<Contract> contractList;

    @PutMapping("deleteContract")
    public String deleteContract (Contract contract){
        contractService.deleteContract(contract);
        return "deleteContract";
    }

    @PostMapping("createContract")
    public String createContract (int contractId, Car car, User user, LocalDate startDate, LocalDate endDate, int totalCost){
        Contract contract = new Contract(contractId, car.getLicensePlate(), user.getEmail(), startDate,endDate,totalCost);
        contractService.addContract(contract);
        return "createContract";
    }

    @GetMapping("contractList")
    public List<Contract> getAllContracts(){return contractService.getContracts();}
}
