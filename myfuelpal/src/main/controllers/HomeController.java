package com.example.myfuelpal;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
// @RequestMapping("/")
public class HomeController {

    @GetMapping("/")
    public String home() {
        try {
           // return "home";
           return "Hello, the time at the server is now " + new Date() + "\n";
        } catch (Exception e) {
            e.printStackTrace();
            return "error";
        }
    }
}
