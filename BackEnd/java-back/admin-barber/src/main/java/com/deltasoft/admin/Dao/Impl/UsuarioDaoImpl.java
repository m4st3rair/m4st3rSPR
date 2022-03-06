package com.deltasoft.admin.Dao.Impl;

import com.deltasoft.admin.Dao.UsuarioDao;
import com.deltasoft.admin.model.Clientes;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class UsuarioDaoImpl implements UsuarioDao {
    @Override
    public List<Clientes> getUsuarios() {
        Clientes clientes = new Clientes();
        clientes.setId(10L);
        clientes.setNombre("Antonio");
        Clientes clientes1 = new Clientes();
        clientes1.setId(11L);
        clientes1.setNombre("Islas");
        Clientes clientes2 = new Clientes();
        clientes2.setId(12L);
        clientes2.setNombre("Romero");

        return List.of(clientes1, clientes2, clientes);
    }
}
