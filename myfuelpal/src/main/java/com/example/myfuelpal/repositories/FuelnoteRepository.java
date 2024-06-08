package com.example.myfuelpal.repositories;

import com.example.myfuelpal.entities.Fuelnote;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FuelnoteRepository extends JpaRepository<Fuelnote, Integer> {

    
}
