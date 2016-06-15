package application.models;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name="users")
public class User {

	@Id
	private String username;
	
	@NotNull
	private String password;
	
	@NotNull
	private int enabled;
	
	@OneToMany(targetEntity=UserRoles.class)
	@JoinColumn(name="username")
	private List<UserRoles> roles;

	public String getUsername() {
		return this.username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return this.password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public int getEnabled() {
		return this.enabled;
	}

	public void setEnabled(int enabled) {
		this.enabled = enabled;
	}

	public List<UserRoles> getRoles() {
		return this.roles;
	}

	public void setRoles(List<UserRoles> roles) {
		this.roles = roles;
	}

}
