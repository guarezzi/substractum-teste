package application.repository;

import javax.transaction.Transactional;

import org.springframework.data.repository.CrudRepository;

import application.models.UserRoles;

@Transactional
public interface UserRolesRepository extends CrudRepository<UserRoles, Long>{

}
