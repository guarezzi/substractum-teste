package application.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "tipo_contato")
public class TipoContato {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id_tipo_contato;
    
    @NotNull
    private String nm_tipo;

	public long getId_tipo_contato() {
		return id_tipo_contato;
	}

	public void setId_tipo_contato(long id_tipo_contato) {
		this.id_tipo_contato = id_tipo_contato;
	}

	public String getNm_tipo() {
		return nm_tipo;
	}

	public void setNm_tipo(String nm_tipo) {
		this.nm_tipo = nm_tipo;
	}
    
}