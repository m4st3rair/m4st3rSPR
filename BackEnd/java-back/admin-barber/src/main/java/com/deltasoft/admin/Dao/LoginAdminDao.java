package com.deltasoft.admin.Dao;

import com.deltasoft.admin.DTO.AdminLoginDTO;
import com.deltasoft.admin.model.LoginAdmin;


public interface LoginAdminDao {
    public LoginAdmin getUserAdmin(AdminLoginDTO adminLoginDTO);
}
