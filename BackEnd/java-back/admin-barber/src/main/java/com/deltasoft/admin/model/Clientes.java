package com.deltasoft.admin.model;

import lombok.Data;

import javax.persistence.*;
import java.util.Calendar;
import java.util.Date;

@Data
@Entity
@Table(name="clientes")
public class Clientes {
    //id, nombre, telefono, contador_visitas, ultima_visita_confirmada,
    // token_notificacion, codigo_temporal, fecha_registro

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "nombre")
    private String nombre;

    @Column(name = "telefono")
    private Long telefono;

    @Column(name = "contador_visitas")
    private Integer contadorVisitas;

    @Column(name = "ultima_visita_confirmada", nullable = true)
    private Date UltimaVisitaConfirmada;

    @Column(name = "token_notificacion", nullable = true)
    private String tokenNotificacion;

    @Column(name = "codigo_temporal", nullable = true)
    private String codigoTemporal;

    @Column(name = "fecha_registro")
    @Temporal(TemporalType.DATE)
    private Calendar fechaRegistro;

    @Column(name = "id_local")
    private String idLocal;

}
