package application.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "tipo_produto")
public class TipoProduto {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id_tipo_produto;
    
    @NotNull
    private String nm_tipo;

	public long getId_tipo_produto() {
		return id_tipo_produto;
	}

	public void setId_tipo_produto(long id_tipo_produto) {
		this.id_tipo_produto = id_tipo_produto;
	}

	public String getNm_tipo() {
		return nm_tipo;
	}

	public void setNm_tipo(String nm_tipo) {
		this.nm_tipo = nm_tipo;
	}
    
}