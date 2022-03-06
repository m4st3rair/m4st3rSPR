package com.deltasoft.admin.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "login_admin")
public class LoginAdmin {

    //Columnas en Base de datos    id	contrasena	usuario	nombre	telefono	nombre_local

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "contrasena")
    private String contrasena;

    @Column(name = "usuario")
    private String usuario;

    @Column(name = "nombre")
    private String nombre;

    @Column(name = "telefono")
    private Long telefono;

    @Column(name = "nombre_local")
    private String nombreLocal;

    @Column(name = "id_local")
    private String idLocal;


}
