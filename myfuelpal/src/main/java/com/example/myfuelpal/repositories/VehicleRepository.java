package com.example.myfuelpal.repositories;

import com.example.myfuelpal.entities.User;
import com.example.myfuelpal.entities.Vehicle;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VehicleRepository extends JpaRepository<Vehicle, Integer> {
    public List<Vehicle> findAllByUser(User user);
}
