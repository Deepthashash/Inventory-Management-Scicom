package com.deeptha.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import com.deeptha.service.UserService;
import com.deeptha.model.User;

@Controller
public class UserController {
	
	@Autowired
	private UserService userService; 
	
	@PostMapping(value="/login", consumes = "application/json", produces = "application/json")
	public @ResponseBody
	User login(@RequestBody Map<String, String> credentials) {
		String email = credentials.get("email");
		String password = credentials.get("password");
		return userService.login(email, password);
	}
	
	@PostMapping(value="/register", consumes = "application/json", produces = "application/json")
	public @ResponseBody
	User register(@RequestBody User newUser) {
		return userService.register(newUser);
	}

}
