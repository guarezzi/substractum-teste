package application.repository;

import javax.transaction.Transactional;

import org.springframework.data.repository.CrudRepository;

import application.models.User;
import application.models.UserRoles;

@Transactional
public interface UserRolesRepository extends CrudRepository<UserRoles, Long>{

	UserRoles findByUser(User user);

}
