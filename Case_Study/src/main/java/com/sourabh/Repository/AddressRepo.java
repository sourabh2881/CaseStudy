package com.sourabh.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sourabh.Entity.User;

public interface AddressRepo extends JpaRepository<User, Integer>{

}
