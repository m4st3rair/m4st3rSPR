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

    @GetMapping(value = "uno")
    private ResponseControllerDTO getUsuario(@RequestHeader(value="Authorization") String token, @RequestParam Long id){
        ResponseControllerDTO respuesta = new ResponseControllerDTO();
        if(validarToken(token))
        {
            try{
                respuesta.setCode(200);
                respuesta.setMessage("La operacion se realizo correctamente");
                respuesta.setData(clienteService.getCliente(id));
            }catch (Exception e){
                respuesta.setCode(501);
                respuesta.setMessage("Lo Sentimos, a ocurrido un error");
            }
        }else {
            respuesta.setCode(403);
            respuesta.setMessage("Lo Sentimos, necesita iniciar sesion");
        }
        return respuesta;
    }
    @PostMapping(value = "registrar")
    private ResponseControllerDTO registrarCliente(@RequestHeader(value="Authorization") String token, @RequestBody ClienteDTO cliente ){

        ResponseControllerDTO respuesta = new ResponseControllerDTO();
        if(validarToken(token))
        {
            try{
                respuesta.setCode(200);
                respuesta.setMessage("La operacion se realizo correctamente");
                clienteService.registrar(cliente);
            }catch (Exception e){
                respuesta.setCode(501);
                respuesta.setMessage("Lo Sentimos, a ocurrido un error");
            }
        }else {
            respuesta.setCode(403);
            respuesta.setMessage("Lo Sentimos, necesita iniciar sesion");
        }
        return respuesta;
    }


    @PutMapping(value = "editar")
    private void editar(){

    }

    @DeleteMapping(value= "eliminar")
    private ResponseControllerDTO eliminar(@RequestHeader(value="Authorization") String token, @RequestParam Long id){

        ResponseControllerDTO respuesta = new ResponseControllerDTO();
        if(validarToken(token))
        {
            try{
                respuesta.setCode(200);
                respuesta.setMessage("La operacion se realizo correctamente");
                clienteService.eliminarCliente(id);
            }catch (Exception e){
                respuesta.setCode(501);
                respuesta.setMessage("Lo Sentimos, a ocurrido un error");
            }
        }else {
            respuesta.setCode(403);
            respuesta.setMessage("Lo Sentimos, necesita iniciar sesion");
        }
        return respuesta;
    }


}
