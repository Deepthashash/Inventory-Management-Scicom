package com.deeptha.service;

import java.util.List;

import com.deeptha.model.User;


public interface UserService {
	
	List<User> allUsers(); 

	User login(String email,String password);
	
	User register(User newUser);
}


