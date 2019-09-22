package com.juacar.recargas.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "PROVEEDOR")
public class Proveedor {
	
	@Id
    @Column(name = "id", nullable = false, unique = true)
    private Long id;
	
	@Column(name = "imagen", nullable = false)
	private String imagenBase64;
	
	@Column(name = "nombre", nullable = false)
	private String nombre;
	
	public Proveedor() {}
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getImagenBase64() {
		return imagenBase64;
	}

	public void setImagenBase64(String imagenBase64) {
		this.imagenBase64 = imagenBase64;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
}
