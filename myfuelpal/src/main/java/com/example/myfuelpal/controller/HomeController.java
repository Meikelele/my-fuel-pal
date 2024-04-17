package com.example.myfuelpal.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/")
public class HomeController {
    @GetMapping("/")
    public String home() {
    return "home";
}

    @GetMapping("/app")
    public String showAppPage() {
        return "app";
    }
}
