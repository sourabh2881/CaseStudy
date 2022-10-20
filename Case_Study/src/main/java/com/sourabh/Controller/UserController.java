package com.sourabh.Controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sourabh.Entity.User;
import com.sourabh.Request.LoginReq;

@RestController
public class UserController {
	
	@GetMapping("/hi")
	public String hi() {
		return "fj";
	}

	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody LoginReq req) {
		User us = new User();
		us.setName("fhj");
		return new ResponseEntity<String>("success",HttpStatus.OK);
	}
}
