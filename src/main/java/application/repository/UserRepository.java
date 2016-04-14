package application.repository;

import javax.transaction.Transactional;

import org.springframework.data.repository.CrudRepository;

import application.models.User;

@Transactional
public interface UserRepository extends CrudRepository<User, Long>{

}
