package com.deeptha.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import com.deeptha.service.UserService;
import com.deeptha.model.Product;
import com.deeptha.model.User;

@Controller
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class UserController {
	
	@Autowired
	private UserService userService; 
	
	@GetMapping(value = "/users", produces = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody
    List<User> hello() {
        return userService.allUsers();
    }
	
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
