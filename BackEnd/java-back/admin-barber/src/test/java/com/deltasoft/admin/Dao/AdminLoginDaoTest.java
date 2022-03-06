package com.deltasoft.admin.Dao;

import com.deltasoft.admin.DTO.AdminLoginDTO;
import com.deltasoft.admin.model.LoginAdmin;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class AdminLoginDaoTest {
    @Autowired
    LoginAdminDao loginAdminDao;

    @Test
    void getIsLoggedTest(){
        AdminLoginDTO adminLoginDTO = new AdminLoginDTO();
        adminLoginDTO.setPassword("12345");
        adminLoginDTO.setUsername("antonio.islas@gmail.com");
            //Integer loginAdmin = loginAdminDao.getUserAdmin(adminLoginDTO);
            //System.out.println( loginAdmin);


    }


}





