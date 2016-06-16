package application;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.security.SecurityProperties;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.context.web.SpringBootServletInitializer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.jdbc.JdbcDaoImpl;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.csrf.CsrfFilter;
import org.springframework.security.web.csrf.CsrfTokenRepository;
import org.springframework.security.web.csrf.HttpSessionCsrfTokenRepository;

@Configuration
@ComponentScan
@EnableAutoConfiguration
public class Application extends SpringBootServletInitializer {

	public static void main(String[] args) {
		SpringApplication.run(applicationClass, args);
	}

	@Override
	protected SpringApplicationBuilder configure(
			SpringApplicationBuilder application) {
		return application.sources(applicationClass);
	}

	private static Class<Application> applicationClass = Application.class;

	@Configuration
	@Order(SecurityProperties.ACCESS_OVERRIDE_ORDER)
	protected static class SecurityConfiguration extends
			WebSecurityConfigurerAdapter {

		@Override
		protected void configure(HttpSecurity http) throws Exception {
			http.httpBasic()
					.and()
					.authorizeRequests()
					.antMatchers(
							"/user/save", "/index.html/**", 
							"/node_modules/**", "/build/js/*.js", "/build/css/*.css",
							"/js/Modules/authentication/**/**").permitAll().anyRequest()
					.authenticated().and().formLogin().loginPage("/index.html")
					.usernameParameter("username")
					.passwordParameter("password").permitAll().and().logout()
					.and()
					.addFilterAfter(new CsrfHeaderFilter(), CsrfFilter.class)
					.csrf().csrfTokenRepository(this.csrfTokenRepository());
		}

		private CsrfTokenRepository csrfTokenRepository() {
			HttpSessionCsrfTokenRepository repository = new HttpSessionCsrfTokenRepository();
			repository.setHeaderName("X-XSRF-TOKEN");
			return repository;
		}

		@Autowired
		DataSource dataSource;

		@Bean(name = "passwordEncoder")
		public PasswordEncoder passwordEncoder() {
			return new BCryptPasswordEncoder();
		}

		@Override
		@Bean(name = "userDetailsService")
		public UserDetailsService userDetailsService() {
			JdbcDaoImpl jdbcImpl = new JdbcDaoImpl();
			jdbcImpl.setDataSource(this.dataSource);
			jdbcImpl.setUsersByUsernameQuery("SELECT username, password, enabled FROM users WHERE username=?");
			jdbcImpl.setAuthoritiesByUsernameQuery("select u.username, r.role from user_roles r, users u where r.id_user = u.id_user and u.username=?");
			return jdbcImpl;
		}

		@Autowired
		public void configAuthentication(AuthenticationManagerBuilder auth)
				throws Exception {
			auth.userDetailsService(this.userDetailsService())
				.passwordEncoder(this.passwordEncoder());

		}

	}
}