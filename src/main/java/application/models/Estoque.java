package application.models;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "estoque")
public class Estoque {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id_estoque;
    
    @ManyToMany ( targetEntity=Produto.class)
    private List<Produto> produto;
    
    @ManyToMany ( targetEntity=PontoVenda.class)
    private List<PontoVenda> pontoVenda;
    
    @NotNull
    private long quantidade;

	public long getId_estoque() {
		return id_estoque;
	}

	public void setId_estoque(long id_estoque) {
		this.id_estoque = id_estoque;
	}

	public List<Produto> getProduto() {
		return produto;
	}

	public void setProduto(List<Produto> produto) {
		this.produto = produto;
	}

	public List<PontoVenda> getPontoVenda() {
		return pontoVenda;
	}

	public void setPontoVenda(List<PontoVenda> pontoVenda) {
		this.pontoVenda = pontoVenda;
	}

	public long getQuantidade() {
		return quantidade;
	}

	public void setQuantidade(long quantidade) {
		this.quantidade = quantidade;
	}
    
}