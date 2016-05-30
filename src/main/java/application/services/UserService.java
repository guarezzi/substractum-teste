package application.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import application.models.User;
import application.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository dao;
	
	public User getUserById(Long id){
		return this.dao.findOne(id);
	}
	
	public boolean saveUser(User user){
		this.dao.save(user);
		return this.simpleConditional(user.getId_user() > 0);
	}
	
	public boolean deleteUser(User user){
		this.dao.delete(user);
		return this.simpleConditional(user.getId_user() == null);
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
