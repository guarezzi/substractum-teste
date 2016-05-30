package application.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import application.models.User;
import application.services.UserService;

@RestController
@RequestMapping(value="/user", method=RequestMethod.GET)
public class UserController {

	@Autowired
	private UserService userService;
	
	@RequestMapping("/save")
	public void save(User user){
		this.userService.saveUser(user);
	}
	
	@RequestMapping("/get")
	public void get(Long id){
		this.userService.getUserById(id);
	}
	
	@RequestMapping("/list")
	public List<User> list(){
		return this.userService.findAll();
	}
	
	@RequestMapping("/current-user")
	public User currentUser(){
		return new User();
	}
}
