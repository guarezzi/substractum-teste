package application.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "ponto_venda")
public class PontoVenda {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id_ponto_venda;
    
    @OneToOne ( targetEntity=TipoPessoa.class)
    private TipoPessoa tipoPessoa;
    
    @NotNull
    private String nm_ponto_venda;

	public long getId_ponto_venda() {
		return id_ponto_venda;
	}

	public void setId_ponto_venda(long id_ponto_venda) {
		this.id_ponto_venda = id_ponto_venda;
	}

	public TipoPessoa getTipoPessoa() {
		return tipoPessoa;
	}

	public void setTipoPessoa(TipoPessoa tipoPessoa) {
		this.tipoPessoa = tipoPessoa;
	}

	public String getNm_ponto_venda() {
		return nm_ponto_venda;
	}

	public void setNm_ponto_venda(String nm_ponto_venda) {
		this.nm_ponto_venda = nm_ponto_venda;
	}
    
}