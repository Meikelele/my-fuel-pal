//definicja pakietu do ktorego ma nalezec ten kontroler
package com.example.myfuelpal;

// importuje klase Controller ze springa (bede mogl tworzyc anotacje @Controller)
import org.springframework.stereotype.Controller;

//mapowanie zadan HTTP z metody GET na okreslone metody w kontrolerze
import org.springframework.web.bind.annotation.GetMapping;


//mowie Springowi ze ta klasa bedzie kontrolerem
// obluga zadan HTTP metody GET na odpowiednie metody
@Controller
public class ErrorController {

    // metoda error bedzie wywolana kiedy trzeba bedzie obsluzyc zadanie na sciezke /error
    @GetMapping("/error")
    public String error() {
    
    //zwracam String ktory jest nazwa widoku __.html
    return "error";
}
}
