package application.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import application.daos.CicloDao;
import application.models.Ciclo;

@Service
public class CicloService {

	@Autowired
	private CicloDao cicloDao;
	
	public Ciclo saveOrUpdate(Ciclo ciclo){
		cicloDao.save(ciclo);
		return ciclo;
	}
	
	public void delete(Ciclo ciclo){
		cicloDao.delete(ciclo);
	}
	
	public Ciclo load(Long id){
		return cicloDao.findOne(id);
	}
	
}
