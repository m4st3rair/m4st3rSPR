package com.deltasoft.admin.Dao.Impl;


import com.deltasoft.admin.Dao.CuponDao;
import com.deltasoft.admin.model.Clientes;
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

        entityManager.createNativeQuery("INSERT INTO cupones (codigo, descuento, tipo_de_descuento) VALUES (?,?,?)")
                .setParameter(1, cupon.getCodigo())
                .setParameter(2, cupon.getDescuento())
                .setParameter(3,cupon.getTipo_de_descuento())
                .executeUpdate();
    }

    @Override
    public List<Cupon> getCupones() {
        return entityManager.createQuery("FROM Cupon").getResultList();
    }

    @Override
    public Cupon buscarCupon(Long idCupon)  {return entityManager.find(Cupon.class, idCupon); }

    @Override
    public void eliminarCupon(Long idCupon) {
        entityManager.createNativeQuery("DELETE FROM cupones WHERE id="+idCupon).executeUpdate();

    }


}
