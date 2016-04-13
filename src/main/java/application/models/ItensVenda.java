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
@Table(name = "itens_venda")
public class ItensVenda {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id_item_venda;
    
    @ManyToMany ( targetEntity=Estoque.class)
    private List<Estoque> estoque;
    
    @ManyToOne ( targetEntity=Venda.class)
    private Venda venda;
    
    @NotNull
    private int quantidade;

	public List<Estoque> getEstoque() {
		return estoque;
	}

	public void setEstoque(List<Estoque> estoque) {
		this.estoque = estoque;
	}

	public Venda getVenda() {
		return venda;
	}

	public void setVenda(Venda venda) {
		this.venda = venda;
	}

	public int getQuantidade() {
		return quantidade;
	}

	public void setQuantidade(int quantidade) {
		this.quantidade = quantidade;
	}
    
}