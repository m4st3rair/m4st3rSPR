package com.deltasoft.admin.Service;

import com.deltasoft.admin.DTO.ClienteDTO;

import java.util.List;

public interface ClienteService {
    public void registrar(ClienteDTO cliente);
    public List<ClienteDTO> getClientes(String localId);
    public void eliminarCliente(Long id);
    public ClienteDTO getCliente(Long id);
}
