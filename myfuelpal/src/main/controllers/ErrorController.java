package com.example.myfuelpal.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//mowie Springowi ze ta klasa bedzie kontrolerem
// obluga zadan HTTP metody GET na odpowiednie metody
@RestController
@RequestMapping("/error")
public class ErrorController {

    // metoda error bedzie wywolana kiedy trzeba bedzie obsluzyc zadanie na sciezke /error
    @GetMapping("/error")
    public String error() {
    
    //zwracam String ktory jest nazwa widoku __.html
    return "error";
}
}
