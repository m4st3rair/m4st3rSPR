package com.deltasoft.admin.Service.Impl;

import com.deltasoft.admin.DTO.CuponDTO;
import com.deltasoft.admin.Dao.CuponDao;
import com.deltasoft.admin.Service.CuponService;
import com.deltasoft.admin.model.Cupon;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@Repository
@Transactional
public class CuponServiceImpl implements CuponService {
    @Autowired
    CuponDao cuponDao;


    @Override
    public void insertCupon(Cupon cupon) {
        Cupon cup = new Cupon();
        cup.setId(cupon.getId());
        cup.setCodigo(cupon.getCodigo());
        cup.setDescuento(cupon.getDescuento());

        cuponDao.insertCupon(cup);
    }

    @Override
    public List<Cupon> getCupones() {
        return null;
    }

    @Override
    public Cupon buscarCupon() {
        return null;
    }

    @Override
    public void eliminarCupon(Long idCupon) {

    }
}
