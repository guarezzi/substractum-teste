package application.daos;

import javax.transaction.Transactional;

import org.springframework.data.repository.CrudRepository;

import application.models.Ciclo;

@Transactional
public interface CicloDao extends CrudRepository<Ciclo, Long>{

}
