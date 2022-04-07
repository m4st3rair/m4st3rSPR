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
        cup.setTipoDeDescuento(resp.getTipoDeDescuento());

        cuponDao.insertCupon(cup);
    }

    @Override
    public List<CuponDTO> getCupones() {
        List<Cupon>cup = cuponDao.getCupones();
        List<CuponDTO> resp = new ArrayList<CuponDTO>();

        for (int i=0; i< cup.size(); i++){
            CuponDTO aux = new CuponDTO();
            aux.setId(cup.get(i).getId());
            aux.setCodigo(cup.get(i).getCodigo());
            aux.setDescuento(cup.get(i).getDescuento());
            aux.setTipoDeDescuento(cup.get(i).getTipoDeDescuento());
            resp.add(aux);
        }
        return resp;
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
