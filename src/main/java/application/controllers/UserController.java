package application.controllers;

import java.security.Principal;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import application.models.User;
import application.services.UserService;

@RestController
@RequestMapping("/user")
public class UserController {

	@Autowired
	private UserService userService;
	
	@RequestMapping(value="/save", method=RequestMethod.POST)
	public void save(@RequestBody User user){
		this.userService.saveUser(user);
	}
	
	@RequestMapping(value="/get", method=RequestMethod.POST)
	public void get(@RequestBody Long id){
		this.userService.getUserById(id);
	}
	
	@RequestMapping(value="/list", method=RequestMethod.POST)
	public @ResponseBody List<User> list(){
		return this.userService.findAll();
	}
	
	@RequestMapping(value="/delete", method=RequestMethod.POST)
	public void deleteUser(@RequestBody User user){
		this.userService.deleteUser(user);
	}
	
	@RequestMapping(value="/current-user", method=RequestMethod.GET)
	public @ResponseBody Principal user(Principal user) {
		return user;
	}
}
