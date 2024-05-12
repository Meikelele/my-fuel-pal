package com.example.myfuelpal.entities;

import jakarta.persistence.*;
import org.hibernate.id.factory.spi.GenerationTypeStrategy;
import org.springframework.boot.autoconfigure.web.WebProperties;


@Entity
@Table(name="user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Integer id;

    @Column(name="id_role")
    private Integer id_role;
    @Column(name="firstName", nullable = false)
    private String firstName;

    @Column(name="lastName", nullable = false)
    private String lastName;

    @Column(name="email", nullable = false)
    private String email;

    @Column(name="password", nullable = false)
    private String password;

    public User() {
    }

    public User(Integer id, Integer id_role, String name, String surname, String email, String password) {
        this.id = id;
        this.id_role = id_role;
        this.firstName = name;
        this.lastName = surname;
        this.email = email;
        this.password = password;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getId_role() {
        return id_role;
    }

    public void setId_role(Integer id_role) {
        this.id_role = id_role;
    }

    public String getName() {
        return firstName;
    }

    public void setName(String name) {
        this.firstName = name;
    }

    public String getSurname() {
        return lastName;
    }

    public void setSurname(String surname) {
        this.lastName = surname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }


    @Override
    public String toString() {
        return "Users{" +
                "id_user=" + id +
                ", id_role='" + id_role + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", username='" + firstName + '\'' +
                ", surname=" + lastName +
                '}';
    }
}
