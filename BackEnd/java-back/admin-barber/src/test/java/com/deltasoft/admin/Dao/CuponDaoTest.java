package com.deltasoft.admin.Dao;


import com.deltasoft.admin.model.Cupon;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class CuponDaoTest {
    @Autowired
    CuponDao cuponDao;

    @Test
    void InsertCuponTest(){
        Cupon cupon = new Cupon();
        cupon.setCodigo("XD");
        cupon.setDescuento(500);
        cuponDao.insertCupon(cupon);

    }

}
