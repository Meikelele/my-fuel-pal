package com.example.myfuelpal.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/vehicle")
public class VehicleController {

    @GetMapping("/vehicle")
    public String test() {
        return "test";
    }
}