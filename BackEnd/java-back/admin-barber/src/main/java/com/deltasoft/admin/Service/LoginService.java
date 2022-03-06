package com.deltasoft.admin.Service;

import com.deltasoft.admin.DTO.AdminLoginDTO;
import com.deltasoft.admin.DTO.AdminLoginResponseDTO;
import com.deltasoft.admin.utils.AdminException;

public interface LoginService {
    /*
    * El servicio retorna el status 200 si es OK y 403 si ocurrio algun error
    * */
    public AdminLoginResponseDTO authLoginAdmin(AdminLoginDTO adminLoginDto) throws AdminException;

}
