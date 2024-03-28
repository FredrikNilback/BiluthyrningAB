package KNOLN.Inlamningsuppgift2.BiluthyrningAB.Service;

import KNOLN.Inlamningsuppgift2.BiluthyrningAB.Objects.User;
import KNOLN.Inlamningsuppgift2.BiluthyrningAB.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository repo;
    public User addUser(User user){
        return repo.save(user);
    }
    public void deleteUser(User user){
        repo.delete(user);
    }
    public User getUserByEmail(String email){
        return repo.findByEmail(email);
    }
}
