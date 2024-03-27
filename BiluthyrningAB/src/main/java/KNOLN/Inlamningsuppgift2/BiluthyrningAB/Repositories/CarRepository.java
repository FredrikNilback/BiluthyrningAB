package KNOLN.Inlamningsuppgift2.BiluthyrningAB.Repositories;


import KNOLN.Inlamningsuppgift2.BiluthyrningAB.Objects.Car;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CarRepository extends JpaRepository <Car, Integer> {


}
