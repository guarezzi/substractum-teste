package application.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import application.models.User;
import application.services.UserService;

@RestController
@RequestMapping(value="/user", method=RequestMethod.POST)
public class UserController {

	@Autowired
	private UserService userService;
	
	@RequestMapping("/save")
	public void save(User user){
		this.userService.saveUser(user);
	}
	
}
