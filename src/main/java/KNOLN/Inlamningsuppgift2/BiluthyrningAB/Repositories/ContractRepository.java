package KNOLN.Inlamningsuppgift2.BiluthyrningAB.Repositories;

import KNOLN.Inlamningsuppgift2.BiluthyrningAB.Objects.Contract;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ContractRepository extends JpaRepository <Contract, Integer> {

    Contract findById(int id);
}
