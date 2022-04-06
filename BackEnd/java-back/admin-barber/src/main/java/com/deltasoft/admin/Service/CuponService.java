package com.deltasoft.admin.Service;

import com.deltasoft.admin.DTO.CuponDTO;
import com.deltasoft.admin.model.Cupon;

import java.util.List;

public interface CuponService {

    void insertCupon(CuponDTO resp);
    List<CuponDTO> getCupones();
    public Cupon buscarCupon(Long idCupon);
    public void eliminarCupon(Long idCupon);

}
