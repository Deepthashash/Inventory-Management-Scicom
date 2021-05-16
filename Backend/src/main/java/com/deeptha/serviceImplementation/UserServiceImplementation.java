package com.deeptha.serviceImplementation;

import java.util.List;
import java.util.ArrayList;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.servlet.mvc.annotation.ResponseStatusExceptionResolver;

import com.deeptha.model.Product;
import com.deeptha.model.User;
import com.deeptha.service.UserService;

@Service
public class UserServiceImplementation implements UserService{
	
	private final static List<User> users = new ArrayList<>();
	
	static {
		 User user1 = new User(1, "deeptha", "deeptha@gmail.com", "123456");
	     User user2 = new User(2, "nimal", "nimal@gmail.com", "123456");
	     users.add(user1);
	     users.add(user2);
	}
	
	@Override
	public List<User> allUsers() {
		return users;
	}

	@Override
	public User login(String email, String password) {
		
		Optional<User> user = users.stream().filter(u -> u.getEmail().equals(email) && u.getPassword().equals(password)).findAny(); 
		
		if(user.isPresent()) {
		    return user.get();
        } else {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED);
        }
	}
	
	@Override
	public User register(User newUser) {
		Optional<User> user = users.stream().filter(u -> u.getEmail().equals(newUser.getEmail()) || (u.getId() == newUser.getId())).findAny();
		
		if(!user.isPresent()){
			users.add(newUser);
			return newUser;
		}else {
			throw new ResponseStatusException(HttpStatus.UNAUTHORIZED);
		}
	}

	

	
}
