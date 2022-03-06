package com.deltasoft.admin.controller;

import com.deltasoft.admin.DTO.ClienteDTO;
import com.deltasoft.admin.utils.JWTUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(value = "http://localhost:3000")
@RequestMapping("/cliente/")
public class ClienteController {

    @Autowired
    private JWTUtil jwtUtil;

    private boolean validarToken(String token) {
        String usuarioId = jwtUtil.getKey(token);
        return usuarioId != null;
    }


    @GetMapping(value = "todos")
    private void getUsuarios(){

    }
    @PostMapping(value = "registrar")
    private void registrarU(@RequestBody ClienteDTO cliente ){
        try{

        }catch(Exception e ){

        }
    }
    @PutMapping(value = "editar")
    private void editar(){

    }

    @DeleteMapping(value= "eliminar")
    private void eliminar(){

    }


}
