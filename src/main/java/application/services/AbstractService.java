package application.services;

import java.util.List;

public interface AbstractService {
	
	public void save(Object object);
	
	public void delete(Object object);
	
	public List<Object> list(Object object);
	
	public Object get(Object object);

}
