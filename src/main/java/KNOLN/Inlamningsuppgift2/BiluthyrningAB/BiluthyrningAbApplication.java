package KNOLN.Inlamningsuppgift2.BiluthyrningAB;

import KNOLN.Inlamningsuppgift2.BiluthyrningAB.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.EntityTransaction;
import jakarta.persistence.Persistence;
import KNOLN.Inlamningsuppgift2.BiluthyrningAB.Objects.*;

@SpringBootApplication
public class BiluthyrningAbApplication {

	@Autowired
	private UserRepository userRepository;

	public static void main(String[] args) {
		SpringApplication.run(BiluthyrningAbApplication.class, args);

	}
}
