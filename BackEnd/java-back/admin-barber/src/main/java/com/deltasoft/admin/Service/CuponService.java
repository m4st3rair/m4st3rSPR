package com.deltasoft.admin.Service;

import com.deltasoft.admin.model.Cupon;

import java.util.List;

public interface CuponService {

    public void insertCupon(Cupon cupon);
    public List<Cupon> getCupones();
    public Cupon buscarCupon();
    public void eliminarCupon(Long idCupon);

}
