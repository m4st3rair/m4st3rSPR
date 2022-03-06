package com.deltasoft.admin.Dao.Impl;


import com.deltasoft.admin.DTO.AdminLoginDTO;
import com.deltasoft.admin.Dao.LoginAdminDao;
import com.deltasoft.admin.model.LoginAdmin;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;
import java.util.List;


@Repository
@Transactional
public class LoginAdminDaoImpl implements LoginAdminDao {

    @PersistenceContext
    EntityManager entityManager;

    @Override
    public LoginAdmin getUserAdmin(AdminLoginDTO adminLoginDTO) {

        //entityManager.createQuery("SELECT p FROM Products WHERE p.categoryId = " + category_id);
        //entityManager.createQuery("SELECT FROM Products WHERE p.categoryId = :category").setParameter("category", category_id);
        // WHERE login_admin.usuario = '" + adminLoginDTO.getUsername() +"'

        List<LoginAdmin> lista = entityManager.createQuery("FROM LoginAdmin WHERE contrasena = '" + adminLoginDTO.getPassword() +"' AND usuario = '"+  adminLoginDTO.getUsername()+"'" ).getResultList();
        if(lista.size() != 0){
            return lista.get(0);
        }else{
            return null;
        }


    }
}
