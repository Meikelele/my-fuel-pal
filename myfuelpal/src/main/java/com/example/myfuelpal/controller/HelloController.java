package com.example.myfuelpal.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/")
public class HelloController {
    @GetMapping("/innaSciezka")
    public String halloween() {
        return "hello";
    }
}
