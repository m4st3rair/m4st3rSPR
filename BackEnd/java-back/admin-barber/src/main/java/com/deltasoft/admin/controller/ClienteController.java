package com.deltasoft.admin.controller;

import com.deltasoft.admin.DTO.ClienteDTO;
import com.deltasoft.admin.DTO.ResponseControllerDTO;
import com.deltasoft.admin.Service.ClienteService;
import com.deltasoft.admin.utils.JWTUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(value = "http://localhost:3000")
@RequestMapping("/cliente/")
public class ClienteController {


    @Autowired
    private JWTUtil jwtUtil;

    @Autowired
    ClienteService clienteService;

    private boolean validarToken(String token) {
        String usuarioId = jwtUtil.getKey(token);
        return usuarioId != null;
    }


    @GetMapping(value = "todos")
    private ResponseControllerDTO getUsuarios(@RequestParam String idLocal){

        ResponseControllerDTO respuesta = new ResponseControllerDTO();
        try {
            respuesta.setCode(200);
            respuesta.setMessage("Se extrageron los datos correctamente");
            respuesta.setData(clienteService.getClientes(idLocal));
        }catch (Exception e){
            respuesta.setCode(500);
            respuesta.setMessage("Ocurrio un error en el servidor");
        }

        return respuesta;
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
