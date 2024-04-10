package KNOLN.Inlamningsuppgift2.BiluthyrningAB.Cotrollers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class WebController {

    @GetMapping("")
    public String goHome() {
        return "homepage";
    }

    @GetMapping("Om oss")
    public String goAbout() {
        return "about";
    }

    @GetMapping("Varukorg")
    public String goCart() {
        return "cart";
    }

    @GetMapping("Ny användare")
    public String goRegister() {
        return "register";
    }

    @GetMapping("Profil")
    public String goProfile() {
        return "profile";
    }
}
