package application.controllers;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import application.models.Ciclo;
import application.services.CicloService;

@RestController
@RequestMapping("/ciclo")
public class CicloController {
	
	@Autowired
	private CicloService cicloService;

	@RequestMapping("/save")
	public void save(String name) {
		Ciclo ciclo = new Ciclo();
		ciclo.setNm_ciclo(name);
		ciclo.setData_inicio(new Date());
		cicloService.saveOrUpdate(ciclo);
	}
	
	@RequestMapping("/load")
	public Ciclo get(Long id){
		return cicloService.load(id);
	}
	
	@RequestMapping("/delete")
	public void delete(Long id){
		Ciclo ciclo = new Ciclo();
		ciclo.setId_ciclo(id);
		cicloService.delete(ciclo);
	}
	
}
