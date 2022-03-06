package com.deltasoft.admin.Dao;


import com.deltasoft.admin.model.Clientes;
import com.deltasoft.admin.model.Cupon;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
public class ClinenteDaoTest {
    @Autowired
    ClienteDao clienteDao;

    @Test
    void registrarClienteTest(){
        Clientes cliente = new Clientes();
        cliente.setNombre("Pedro El momo");
        cliente.setTelefono(7876545473l);
        cliente.setIdLocal("ADMCASA");
        clienteDao.registrarCliente(cliente);

    }
    @Test
    void getClientesPorIdLocalTest(){
        List<Clientes> salida = clienteDao.getClientesPorIdLocal("ADMBRB");
        for(Clientes cl : salida){
            System.out.println(cl.toString());
        }
    }

    @Test
    void getClienteTest(){
        Clientes cl = clienteDao.getCliente(2l);
        System.out.println(cl.toString());
    }



}
