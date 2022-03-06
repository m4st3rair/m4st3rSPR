package com.deltasoft.admin.Service.Impl;

import com.deltasoft.admin.DTO.AdminLoginDTO;
import com.deltasoft.admin.DTO.AdminLoginResponseDTO;
import com.deltasoft.admin.Dao.LoginAdminDao;
import com.deltasoft.admin.Service.LoginService;
import com.deltasoft.admin.model.LoginAdmin;
import com.deltasoft.admin.utils.AdminException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
@Transactional

public class LoginServiceImpl implements LoginService {
    @Autowired
    LoginAdminDao loginAdminDao;

    @Override
    public AdminLoginResponseDTO authLoginAdmin(AdminLoginDTO adminLoginDto) throws AdminException{
        LoginAdmin resp = loginAdminDao.getUserAdmin(adminLoginDto);
        if(resp != null){
            AdminLoginResponseDTO adminResp = new AdminLoginResponseDTO();
            adminResp.setId(resp.getId());
            adminResp.setUsername(resp.getUsuario());
            adminResp.setNombreLocal(resp.getNombreLocal());
            String[] data = resp.getIdLocal().split("-");
            adminResp.setPermisos(data[1]);
            adminResp.setId_local(data[0]);

            return adminResp;

        }else{
            throw new AdminException("El Usuario no es valido");
        }



    }
}
