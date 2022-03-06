package com.deltasoft.admin.controller;

import com.deltasoft.admin.Dao.UsuarioDao;
import com.deltasoft.admin.model.Clientes;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class testController {
    @Autowired
    private UsuarioDao usuarioDao;


    @RequestMapping(value = "rest/")
    public String holaMundo(){
        return "Servicio vivo";
    }

    @RequestMapping(value = "rest/usuario")
    public Clientes getUsuario(){
        Clientes clientes = new Clientes();
        clientes.setId(10L);
        clientes.setNombre("Antonio");
        return clientes;
    }

    @RequestMapping(value = "rest/usuarios")
    public List<Clientes> getUsuarios(){

        return usuarioDao.getUsuarios();
    }


}
