package com.deltasoft.admin.Dao;

import com.deltasoft.admin.DTO.CuponDTO;
import com.deltasoft.admin.model.Cupon;
import java.util.List;

public interface CuponDao {

    public void insertCupon(Cupon cupon);
    public List<Cupon> getCupones();
    public Cupon buscarCupon();
    public void eliminarCupon(Long idCupon);

}
