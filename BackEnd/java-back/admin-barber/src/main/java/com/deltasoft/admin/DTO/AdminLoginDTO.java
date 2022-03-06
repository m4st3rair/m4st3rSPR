package com.deltasoft.admin.DTO;


import lombok.Data;


@Data
public class AdminLoginDTO {
    private String username;
    private String password;
    private Integer codigo;
    private Long id;
}
