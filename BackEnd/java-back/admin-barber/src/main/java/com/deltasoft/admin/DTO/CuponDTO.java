package com.deltasoft.admin.DTO;

import lombok.Data;

@Data
public class CuponDTO {
    private Long id;
    private String codigo;
    private Integer descuento;
    private String tipo_de_descuento;

}
