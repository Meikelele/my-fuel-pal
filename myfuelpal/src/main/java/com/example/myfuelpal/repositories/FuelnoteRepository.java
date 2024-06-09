package com.example.myfuelpal.repositories;

import com.example.myfuelpal.entities.Fuelnote;
import com.example.myfuelpal.entities.User;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FuelnoteRepository extends JpaRepository<Fuelnote, Integer> {
    public List<Fuelnote> findAllByUser(User user);
    
}
