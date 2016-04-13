package application.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "tipo_pessoa")
public class TipoPessoa {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id_tipo_pessoa;
    
    @NotNull
    private String descricao;

	public long getId_tipo_pessoa() {
		return id_tipo_pessoa;
	}

	public void setId_tipo_pessoa(long id_tipo_pessoa) {
		this.id_tipo_pessoa = id_tipo_pessoa;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}
    
}