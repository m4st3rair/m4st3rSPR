package com.deltasoft.admin.controller;


import com.deltasoft.admin.DTO.AdminLoginDTO;
import com.deltasoft.admin.DTO.AdminLoginResponseDTO;
import com.deltasoft.admin.DTO.ResponseControllerDTO;
import com.deltasoft.admin.Service.LoginService;
import com.deltasoft.admin.utils.AdminException;
import com.deltasoft.admin.utils.JWTUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(value = "http://localhost:3000")
@RequestMapping("/login/")
public class loginController {
    @Autowired
    private LoginService loginService;

    @Autowired
    private JWTUtil jwtUtil;

    private boolean validarToken(String token) {
        String usuarioId = jwtUtil.getKey(token);
        return usuarioId != null;
    }
    //@CrossOrigin(value = "http://localhost:3000")
    @GetMapping(value="valido")
    public ResponseControllerDTO valido(@RequestHeader(value="Authorization") String token) {

        ResponseControllerDTO respuesta = new ResponseControllerDTO();
        System.out.println();

        if (!validarToken(token)) {
            respuesta.setMessage("Sesion terminada por favor Inicia sesion de nuevo");
            respuesta.setCode(403);
        }else{
            respuesta.setMessage("OK");
            respuesta.setCode(200);
        }

        return respuesta;
    }



    @PostMapping(value="inicioSesion")
    public ResponseControllerDTO inicioSesion(@RequestBody AdminLoginDTO  adminLogin){
        ResponseControllerDTO respuesta = new ResponseControllerDTO();
        try{
            AdminLoginResponseDTO adminResp  = loginService.authLoginAdmin(adminLogin);
            respuesta.setCode( 200 );

            String tokenJwt = jwtUtil.create(String.valueOf( adminResp.getId() ), adminResp.getUsername());
            adminResp.setJwt(tokenJwt);

            respuesta.setData(adminResp);
            respuesta.setMessage("Inicio de sesion Correcta");

        }catch(AdminException e){
            respuesta.setMessage("Inicio de sesion Incorrecta por favo vuelve a intentarlo");
            respuesta.setCode(403);
        }catch(Exception e){
            respuesta.setMessage("Error inesperado por favor vuelve a intentarlo");
            respuesta.setCode(500);
        }




        return respuesta;
    }

}
