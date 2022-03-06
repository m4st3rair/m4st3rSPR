package com.deltasoft.admin.DTO;

import lombok.Data;

@Data
public class AdminLoginResponseDTO {
    private String username;
    private Long id;
    private String jwt;
    private String nombreLocal;
    private String id_local;
    private String permisos;
}
