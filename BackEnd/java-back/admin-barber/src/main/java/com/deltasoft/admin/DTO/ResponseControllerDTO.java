package com.deltasoft.admin.DTO;

import lombok.Data;

@Data
public class ResponseControllerDTO {
    private int code;
    private Object data;
    private String message;
}
