package com.sourabh.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sourabh.Entity.User;

public interface UserRepo extends JpaRepository<User, Integer>{

}
