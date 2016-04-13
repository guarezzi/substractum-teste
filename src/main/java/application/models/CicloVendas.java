package application.models;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "ciclo_vendas")
public class CicloVendas {

	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id_ciclo_vendas;
	
	@ManyToMany( targetEntity=Produto.class )
    private List<Produto> produto;
    
    @ManyToOne( targetEntity=Ciclo.class )
    private Ciclo ciclo;
    
    @NotNull
    private float valor;

	public long getId_ciclo_vendas() {
		return id_ciclo_vendas;
	}

	public void setId_ciclo_vendas(long id_ciclo_vendas) {
		this.id_ciclo_vendas = id_ciclo_vendas;
	}

	public List<Produto> getProduto() {
		return produto;
	}

	public void setProduto(List<Produto> produto) {
		this.produto = produto;
	}

	public Ciclo getCiclo() {
		return ciclo;
	}

	public void setCiclo(Ciclo ciclo) {
		this.ciclo = ciclo;
	}

	public float getValor() {
		return valor;
	}

	public void setValor(float valor) {
		this.valor = valor;
	}
    
}