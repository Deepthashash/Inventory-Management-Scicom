package com.deeptha.service;

import com.deeptha.model.User;


public interface UserService {

	User login(String email,String password);
	
	User register(User newUser);
}


