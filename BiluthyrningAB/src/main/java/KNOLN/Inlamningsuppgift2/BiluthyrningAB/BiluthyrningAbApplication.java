package KNOLN.Inlamningsuppgift2.BiluthyrningAB;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.EntityTransaction;
import jakarta.persistence.Persistence;
import KNOLN.Inlamningsuppgift2.BiluthyrningAB.Objects.*;

@SpringBootApplication
public class BiluthyrningAbApplication {

	public static void main(String[] args) {
		SpringApplication.run(BiluthyrningAbApplication.class, args);
		
	}
}
