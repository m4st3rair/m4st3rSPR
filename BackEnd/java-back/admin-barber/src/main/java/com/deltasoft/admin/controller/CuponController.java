package com.deltasoft.admin.controller;


import com.deltasoft.admin.DTO.ClienteDTO;
import com.deltasoft.admin.DTO.CuponDTO;
import com.deltasoft.admin.DTO.ResponseControllerDTO;
import com.deltasoft.admin.Service.CuponService;
import com.deltasoft.admin.utils.JWTUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(value = "http://localhost:3000")
@RequestMapping("/cupon/")

public class CuponController {

    @Autowired
    private JWTUtil jwtUtil;

    @Autowired
    CuponService cuponService;

    private boolean validarToken(String token){
        String usuarioId = jwtUtil.getKey(token);
        return usuarioId != null;
    }

    @PostMapping(value = "registrarc")
    private ResponseControllerDTO registrarCupon(@RequestHeader(value="Authorization") String token, @RequestBody CuponDTO cup){
        ResponseControllerDTO Resp = new ResponseControllerDTO();
        if(validarToken(token)){
            try{
                Resp.setCode(200);
                Resp.setMessage("La operacion ha sido exitosa");
                cuponService.insertCupon(cup);

            }catch (Exception e){
                Resp.setCode(404);
                Resp.setMessage("Algo ha salido mal :(");
            }
        }else{
            Resp.setCode(403);
            Resp.setMessage("Lo sentimos pero necesita tener sesion valida para realizar esta operacion");
        }
        return Resp;
    }
}
