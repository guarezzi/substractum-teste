package application.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import application.models.User;
import application.models.UserRoles;
import application.repository.UserRolesRepository;

@Service
public class UserRolesService {

	@Autowired
	private UserRolesRepository dao;
	
	public UserRoles saveUserRoles(UserRoles userRoles){
		this.dao.save(userRoles);
		return userRoles;
	}
	
	public void deleteUserRoles(UserRoles userRoles){
		this.dao.delete(userRoles);
	}
	
	public UserRoles getByUser(User user){
		return this.dao.findByUser(user);
	}
	
}
