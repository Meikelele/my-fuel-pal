package com.example.myfuelpal.controllers;

import com.example.myfuelpal.entities.User;
import com.example.myfuelpal.repositories.UserRepository;
// import com.example.myfuelpal.repositories.VehicleRepository;

// import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/users")
public class UserController {

    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping
    public List<User> users() {
        return userRepository.findAll();
    }
    

}
