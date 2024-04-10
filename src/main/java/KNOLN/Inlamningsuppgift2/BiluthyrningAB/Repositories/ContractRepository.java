package KNOLN.Inlamningsuppgift2.BiluthyrningAB.Repositories;

import KNOLN.Inlamningsuppgift2.BiluthyrningAB.Objects.Contract;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface ContractRepository extends JpaRepository <Contract, Long> {

    Contract findByContractNumber(long id);

    List<Contract> findByUserEmail(String email);
}
