package com.deltasoft.admin.Service.Impl;

import com.deltasoft.admin.DTO.ClienteDTO;
import com.deltasoft.admin.Dao.ClienteDao;
import com.deltasoft.admin.Service.ClienteService;
import com.deltasoft.admin.model.Clientes;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Repository
@Transactional

public class ClienteServiceImpl implements ClienteService {

    @Autowired
    ClienteDao clienteDao;

    @Override
    public void registrar(ClienteDTO cliente) {

    }

    @Override
    public List<ClienteDTO> getClientes(String localId) {
        List<Clientes> clientes = clienteDao.getClientesPorIdLocal(localId);
        List<ClienteDTO> respuesta = new ArrayList<ClienteDTO>();

        for (int i=0; i<clientes.size(); i++){
            ClienteDTO aux = new ClienteDTO();
            aux.setNombre(clientes.get(i).getNombre());
            aux.setId(clientes.get(i).getId());
            aux.setTelefono(clientes.get(i).getTelefono());
            respuesta.add(aux);
        }
        return respuesta;
    }

    @Override
    public void eliminarCliente(Long id) {

    }

    @Override
    public ClienteDTO getCliente(Long id) {
        return null;
    }
}
