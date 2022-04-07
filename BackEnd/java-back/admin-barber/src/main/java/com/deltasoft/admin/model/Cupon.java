package com.deltasoft.admin.model;


import lombok.Data;
import javax.persistence.*;

@Data
@Entity
@Table(name = "cupones")
public class Cupon {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name="codigo")
    private String codigo;

    @Column(name="descuento")
    private Integer descuento;

    @Column(name = "tipo_de_descuento")
    private String tipoDeDescuento;
}
