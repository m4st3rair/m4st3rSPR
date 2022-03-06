package com.deltasoft.admin.Dao.Impl;

import com.deltasoft.admin.Dao.ClienteDao;
import com.deltasoft.admin.model.Clientes;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;
import java.util.List;

@Repository
@Transactional
public class ClienteDaoImpl implements ClienteDao {
    @PersistenceContext
    EntityManager entityManager;

    @Override
    public void registrarCliente(Clientes cliente) {
        entityManager.createNativeQuery("INSERT INTO clientes ( nombre, telefono, contador_visitas, ultima_visita_confirmada, token_notificacion, codigo_temporal, id_local, fecha_registro) " +
                "VALUES (?, ?, ?, ?, ?, ?, ?, current_timestamp())")
                .setParameter(1, cliente.getNombre())
                .setParameter(2,cliente.getTelefono())
                .setParameter(3, 0)
                .setParameter(4, null)
                .setParameter(5, null)
                .setParameter(6, "")
                .setParameter(7, cliente.getIdLocal())
                .executeUpdate();
    }

    @Override
    public Clientes getCliente(Long idCliente) {
        return entityManager.find(Clientes.class, idCliente);
    }

    @Override
    public List<Clientes> getClientesPorIdLocal(String idLocal) {
        List<Clientes> resp  = entityManager.createQuery("FROM Clientes as cl WHERE cl.idLocal = '" +idLocal+"'").getResultList();
        return resp;
    }

    @Override
    public void eliminarCliente(Long id) {

    }

    @Override
    public void actualizarDatos(Clientes cliente) {

    }

    @Override
    public void actualizarContador(Clientes cliente) {

    }

    @Override
    public void buscarCliente() {

    }
}
