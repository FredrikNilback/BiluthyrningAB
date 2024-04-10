package KNOLN.Inlamningsuppgift2.BiluthyrningAB.Cotrollers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class WebController {

    @GetMapping("")
    public String goHome() {
        return "homepage";
    }

    @GetMapping("cars")
    public String goCar() {
        return "car";
    }

    @GetMapping("about")
    public String goAbout() {
        return "about";
    }

    @GetMapping("cart")
    public String goCart() {
        return "cart";
    }

    @GetMapping("register")
    public String goRegister() {
        return "register";
    }

    @GetMapping("profile")
    public String goProfile() {
        return "profile";
    }
}
