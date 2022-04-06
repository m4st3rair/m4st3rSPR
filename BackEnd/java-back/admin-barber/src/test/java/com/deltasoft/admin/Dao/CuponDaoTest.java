package com.deltasoft.admin.Dao;


import com.deltasoft.admin.model.Cupon;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
public class CuponDaoTest {
    @Autowired
    CuponDao cuponDao;

    @Test
    void InsertCuponTest(){
        Cupon cupon = new Cupon();
        cupon.setCodigo("TaniaR");
        cupon.setDescuento(1);
        cupon.setTipo_de_descuento("MONETARIO");
        cuponDao.insertCupon(cupon);

    }

    @Test
    void BuscarCuponTest(){
        Cupon cupon = cuponDao.buscarCupon(5L);
        System.out.println(cupon.toString());
        /*System.out.println(cupon.getCodigo());
        System.out.println(cupon.getDescuento());
        System.out.println(cupon.getTipo_de_descuento());*/
    }

    @Test
    void eliminarCupon(){
        cuponDao.eliminarCupon(4L);
    }
}
