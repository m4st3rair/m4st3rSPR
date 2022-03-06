package com.deltasoft.admin.Dao.Impl;


import com.deltasoft.admin.Dao.CuponDao;
import com.deltasoft.admin.model.Cupon;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;
import java.util.List;

@Repository
@Transactional
public class CuponDaoImpl implements CuponDao {

    @PersistenceContext
    EntityManager entityManager;

    @Override
    public void insertCupon(Cupon cupon) {

        entityManager.createNativeQuery("INSERT INTO cupones (codigo, descuento) VALUES (?,?)")
                .setParameter(1, cupon.getCodigo())
                .setParameter(2, cupon.getDescuento())
                .executeUpdate();
    }

    @Override
    public void eliminarCupon(Long idCupon) {

    }

    @Override
    public List<Cupon> getCupones() {
        return null;
    }

    @Override
    public Cupon buscarCupon() {
        return null;
    }


}
