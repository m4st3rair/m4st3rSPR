package com.deltasoft.admin.Service.Impl;

import com.deltasoft.admin.DTO.CuponDTO;
import com.deltasoft.admin.Dao.CuponDao;
import com.deltasoft.admin.Service.CuponService;
import com.deltasoft.admin.model.Cupon;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;


@Repository
@Transactional
public class CuponServiceImpl implements CuponService {
    @Autowired
    CuponDao cuponDao;


    @Override
    public void insertCupon(CuponDTO resp) {
        Cupon cup = new Cupon();
        cup.setId(resp.getId());
        cup.setCodigo(resp.getCodigo());
        cup.setDescuento(resp.getDescuento());
        cup.setTipo_de_descuento(resp.getTipo_de_descuento());

        cuponDao.insertCupon(cup);
    }

    @Override
    public List<CuponDTO> getCupones() {
        return null;
    }

    @Override
    public Cupon buscarCupon(Long idCupon) {
        Cupon cup = cuponDao.buscarCupon(idCupon);
        return cup;
    }

    @Override
    public void eliminarCupon(Long idCupon) {

    }

}
