package application.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name="user_roles")
public class UserRoles {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int user_role_id;
	
	@NotNull
	private String role;
	
	@NotNull
	@ManyToOne(targetEntity=User.class)
	@JoinColumn(name="username")
	private User user;

	public int getUser_role_id() {
		return this.user_role_id;
	}

	public void setUser_role_id(int user_role_id) {
		this.user_role_id = user_role_id;
	}

	public String getRole() {
		return this.role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public User getUser() {
		return this.user;
	}

	public void setUser(User user) {
		this.user = user;
	}
	
}
