package application.models;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "ciclo")
public class Ciclo {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id_ciclo;
    
    @NotNull
    private String nm_ciclo;
    
    @NotNull
    private Date data_inicio;
    
    private Date data_fim;
    
    @OneToOne( targetEntity=Fornecedor.class )
    private Fornecedor fornecedor;

	public long getId_ciclo() {
		return id_ciclo;
	}

	public void setId_ciclo(long id_ciclo) {
		this.id_ciclo = id_ciclo;
	}

	public String getNm_ciclo() {
		return nm_ciclo;
	}

	public void setNm_ciclo(String nm_ciclo) {
		this.nm_ciclo = nm_ciclo;
	}

	public Date getData_inicio() {
		return data_inicio;
	}

	public void setData_inicio(Date data_inicio) {
		this.data_inicio = data_inicio;
	}

	public Date getData_fim() {
		return data_fim;
	}

	public void setData_fim(Date data_fim) {
		this.data_fim = data_fim;
	}

	public Fornecedor getFornecedor() {
		return fornecedor;
	}

	public void setFornecedor(Fornecedor fornecedor) {
		this.fornecedor = fornecedor;
	}

}