package application.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import application.models.User;
import application.models.UserRoles;
import application.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository dao;
	
	@Autowired
	private UserRolesService userRolesService;
	
	@Autowired
    PasswordEncoder passwordEncoder;
	
	public User getUserById(Long id){
		return this.dao.findOne(id);
	}
	
	public boolean saveUser(User user){
		if(user.getId_user() > 0){
			User oldUser = this.dao.findOne(user.getId_user());
			if(!user.getPassword().isEmpty() && !oldUser.getPassword().equals(user.getPassword())){
				user.setPassword(this.passwordEncoder.encode(user.getPassword().trim()));
			}else if (user.getPassword().isEmpty()) {
				user.setPassword(oldUser.getPassword());
			}
		} else {
			user.setPassword(this.passwordEncoder.encode(user.getPassword().trim()));			
		}
		user.setEnabled(1);
		this.dao.save(user);
		this.saveUserRoles(user);
		return true;
	}
	
	public boolean saveUserRoles(User user){
		UserRoles roles = userRolesService.getByUser(user);
		if(roles == null){
			roles = new UserRoles();
			roles.setUser(user);
			roles.setRole("ROLE_ADMIN");
			userRolesService.saveUserRoles(roles);			
		}
		return this.simpleConditional(roles.getUser_role_id() > 0);
	}
	
	public boolean deleteUser(User user){
		UserRoles roles = userRolesService.getByUser(user);
		if(!roles.getRole().isEmpty()){
			userRolesService.deleteUserRoles(roles);
		}
		this.dao.delete(user);
		return true;
	}
	
	public List<User> findAll(){
		return (List<User>) this.dao.findAll();
	}
	
	private boolean simpleConditional(boolean value){
		if(value){
			return true;
		}
		return false;
	}
	
}
