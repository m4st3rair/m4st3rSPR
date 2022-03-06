package com.deltasoft.admin.Dao;


import com.deltasoft.admin.model.Clientes;

import java.util.List;

public interface ClienteDao {
    public void registrarCliente(Clientes cliente);
    public Clientes getCliente(Long idCliente);
    public List<Clientes> getClientesPorIdLocal(String idLocal);
    public void buscarCliente();
    public void eliminarCliente(Long id);

    /*
    * Actualiza solo el nombre y/o numero de telefono
    * */
    public void actualizarDatos(Clientes cliente);

    /*
    * Actualiza contadoresde citas y actualiza fechas de ultima consulta
    * */
    public void actualizarContador(Clientes cliente);

}
