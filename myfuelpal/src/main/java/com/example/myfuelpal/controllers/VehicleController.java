package com.example.myfuelpal.controllers;

import com.example.myfuelpal.config.JwtService;
import com.example.myfuelpal.entities.User;
import com.example.myfuelpal.entities.Vehicle;
import com.example.myfuelpal.repositories.UserRepository;
import com.example.myfuelpal.repositories.VehicleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/vehicles")
public class VehicleController {

    @Autowired
    private VehicleRepository vehicleRepository;

    @Autowired
    private JwtService jwtService;

    @Autowired
    private UserRepository UserRepository;






    @GetMapping
    public List<Vehicle> getAllVehicles(@RequestHeader("Authorization") String token) {
        token = token.substring(7);
        User user = UserRepository.findByEmail(jwtService.extractEmail(token)).get();
        return vehicleRepository.findAllByUser(user);
    }

    // Get vehicle by ID
    @GetMapping("/{id}")
    public ResponseEntity<Vehicle> getVehicleById(@PathVariable Integer id) {
        Optional<Vehicle> vehicle = vehicleRepository.findById(id);
        if (vehicle.isPresent()) {
            return ResponseEntity.ok(vehicle.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Create new vehicle
    @PostMapping
    public Vehicle createVehicle(@RequestHeader("Authorization") String token, @RequestBody Vehicle vehicle) {
        token = token.substring(7);
        User user = UserRepository.findByEmail(jwtService.extractEmail(token)).get();
        vehicle.setUser(user);
        return vehicleRepository.save(vehicle);
    }

    // Update existing vehicle
    @PutMapping("/{id}")
    public ResponseEntity<Vehicle> updateVehicle(@PathVariable Integer id, @RequestBody Vehicle vehicleDetails) {
        Optional<Vehicle> vehicle = vehicleRepository.findById(id);
        if (vehicle.isPresent()) {
            Vehicle existingVehicle = vehicle.get();
            existingVehicle.setBrand(vehicleDetails.getBrand());
            existingVehicle.setModel(vehicleDetails.getModel());
            existingVehicle.setFuel(vehicleDetails.getFuel());
            existingVehicle.setCourse(vehicleDetails.getCourse());
            existingVehicle.setNickname(vehicleDetails.getNickname());
            existingVehicle.setLicensePlate(vehicleDetails.getLicensePlate());
            existingVehicle.setCountry(vehicleDetails.getCountry());
            existingVehicle.setDescription(vehicleDetails.getDescription());
            Vehicle updatedVehicle = vehicleRepository.save(existingVehicle);
            return ResponseEntity.ok(updatedVehicle);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Delete vehicle
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteVehicle(@PathVariable Integer id) {
        Optional<Vehicle> vehicle = vehicleRepository.findById(id);
        if (vehicle.isPresent()) {
            vehicleRepository.delete(vehicle.get());
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
