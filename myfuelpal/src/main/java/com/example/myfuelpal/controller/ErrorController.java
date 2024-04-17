package com.example.myfuelpal.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/")
public class ErrorController {
    @GetMapping("/errorr")
    public String error(){
        return "error";
    }
}