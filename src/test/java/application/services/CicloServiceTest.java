import java.util.Date;

import javax.validation.constraints.AssertTrue;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import application.models.Ciclo;
import application.services.CicloService;
import static org.junit.Assert.*;

public class CicloServiceTest extends AbstractTest {
	
	@Autowired
	private CicloService cicloService;
	
   @Test
   public void saveTest() {
	   Ciclo ciclo = new Ciclo();
	   ciclo.setNm_ciclo("teste");
	   ciclo.setData_inicio(new Date());
	   cicloService.saveOrUpdate(ciclo);
	   long id = ciclo.getId_ciclo();
	   assertNotNull (id);
   }
}