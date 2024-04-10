package KNOLN.Inlamningsuppgift2.BiluthyrningAB.Cotrollers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class WebController {

    @GetMapping("")
    public String goHome(){
        return "homepage";
    }
}
