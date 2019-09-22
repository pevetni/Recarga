package com.juacar.recargas;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories("com.juacar.recargas.repository")
public class RecargaBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(RecargaBackendApplication.class, args);
	}

}
