package com.example.myfuelpal.controllers;

import com.example.myfuelpal.entities.User;
import com.example.myfuelpal.repositories.UserRepository;
import com.example.myfuelpal.config.JwtService;
// import com.example.myfuelpal.repositories.VehicleRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
// import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/users")
public class UserController {

    @Autowired
    private JwtService jwtService;

    @Autowired
    private UserRepository UserRepository;

    @GetMapping("/details")
    public ResponseEntity<User> getUserDetails(@RequestHeader("Authorization") String token) {
        try {
            String email = jwtService.extractEmail(token.substring(7));
            User user = UserRepository.findByEmail(email)
                    .orElseThrow(() -> new UsernameNotFoundException("User not found with email: " + email));
            return ResponseEntity.ok(user);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }

    @GetMapping
    public List<User> users() {
        return UserRepository.findAll();
    }
    

}
