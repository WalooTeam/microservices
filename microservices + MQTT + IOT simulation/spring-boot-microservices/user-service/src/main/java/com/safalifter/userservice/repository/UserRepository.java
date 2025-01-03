package com.safalifter.userservice.repository;

import com.safalifter.userservice.enums.Active;
import com.safalifter.userservice.model.User;
import com.safalifter.userservice.enums.Role; // Import the Role enum
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, String> {

    Optional<User> findByEmail(String email);

    Optional<User> findByUsername(String username);

    List<User> findAllByActive(Active active);

    List<User> findAllByRole(Role role); // New method to find by Role
}