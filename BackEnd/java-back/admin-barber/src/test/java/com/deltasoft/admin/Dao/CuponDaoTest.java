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
        cupon.setCodigo("TaniaRojano");
        cupon.setDescuento(1);
        cupon.setTipoDeDescuento("MONETARIO");
        cuponDao.insertCupon(cupon);

    }

    @Test
    void BuscarCuponTest(){
        Cupon cupon = cuponDao.buscarCupon(6L);
        System.out.println(cupon.toString());
        /*System.out.println(cupon.getCodigo());
        System.out.println(cupon.getDescuento());
        System.out.println(cupon.getTipo_de_descuento());*/
    }
    @Test
    void GetCuponesTest(){
        List<Cupon> cupon = cuponDao.getCupones();
        for (Cupon cl: cupon){
            System.out.println(cl.toString());
        }
    }

    @Test
    void eliminarCupon(){
        cuponDao.eliminarCupon(4L);
    }
}
