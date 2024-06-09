package com.example.myfuelpal.controllers;

import com.example.myfuelpal.config.JwtService;
import com.example.myfuelpal.entities.User;
import com.example.myfuelpal.entities.Fuelnote;
import com.example.myfuelpal.repositories.FuelnoteRepository;
import com.example.myfuelpal.repositories.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/fuelnotes")
public class FuelnoteController {

    @Autowired
    private FuelnoteRepository fuelnoteRepository;

     @Autowired
    private JwtService jwtService;

    @Autowired
    private UserRepository UserRepository;

    // Get all fuelnotes
    @GetMapping
    public List<Fuelnote> getAllFuelnotes(@RequestHeader("Authorization") String token) {
        token = token.substring(7);
        User user = UserRepository.findByEmail(jwtService.extractEmail(token)).get();
        return fuelnoteRepository.findAllByUser(user);
    }

    // Get fuelnote by ID
    @GetMapping("/{id}")
    public ResponseEntity<Fuelnote> getFuelnoteById(@PathVariable Integer id) {
        Optional<Fuelnote> fuelnote = fuelnoteRepository.findById(id);
        if (fuelnote.isPresent()) {
            return ResponseEntity.ok(fuelnote.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Create new fuelnote
    @PostMapping
    public Fuelnote createFuelnote(@RequestHeader("Authorization") String token, @RequestBody Fuelnote fuelnote) {
        token = token.substring(7);
        User user = UserRepository.findByEmail(jwtService.extractEmail(token)).get();
        fuelnote.setUser(user);
        return fuelnoteRepository.save(fuelnote);
    }

    // Update existing fuelnote
    @PutMapping("/{id}")
    public ResponseEntity<Fuelnote> updateFuelnote(@PathVariable Integer id, @RequestBody Fuelnote fuelnoteDetails) {
        Optional<Fuelnote> fuelnote = fuelnoteRepository.findById(id);
        if (fuelnote.isPresent()) {
            Fuelnote existingFuelnote = fuelnote.get();
            existingFuelnote.setPrice(fuelnoteDetails.getPrice());
            existingFuelnote.setLiters(fuelnoteDetails.getLiters());
            existingFuelnote.setDescription(fuelnoteDetails.getDescription());
            existingFuelnote.setKalendarz(fuelnoteDetails.getKalendarz());
            existingFuelnote.setTime(fuelnoteDetails.getTime());
            existingFuelnote.setUser(fuelnoteDetails.getUser());
            existingFuelnote.setVehicle(fuelnoteDetails.getVehicle());
            Fuelnote updatedFuelnote = fuelnoteRepository.save(existingFuelnote);
            return ResponseEntity.ok(updatedFuelnote);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Delete fuelnote
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteFuelnote(@PathVariable Integer id) {
        Optional<Fuelnote> fuelnote = fuelnoteRepository.findById(id);
        if (fuelnote.isPresent()) {
            fuelnoteRepository.delete(fuelnote.get());
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
