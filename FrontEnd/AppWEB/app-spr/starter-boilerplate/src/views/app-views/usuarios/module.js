import React, { useState, useEffect } from 'react';
import JwtAuthService from 'services/JwtAuthService';
import ClientesService from 'services/ClientesService';
import UsuarioForm from './components/UsuarioForm';
import {ESTATUS_FOMR} from 'configs/AppConfig';
import { signOut } from 'redux/actions/Auth';
import { connect } from 'react-redux';
import { UserAddOutlined } from '@ant-design/icons';
import { message, Modal, Button, Table, Row, Col} from "antd";
import { useHistory } from "react-router-dom";




const Usuarios = () => {

	const [visible, setVisible]= useState(false); 
	const [clientes, setClientes]= useState([]);

	async function cargarClientes(){
		try{
			const clientesAux = await ClientesService.getClientes();
			setClientes(clientesAux.data);
			console.log(clientesAux.data);
		}catch(error){
			console.log(error);
		}
	}

	useEffect(()=>{
        cargarClientes();
    },[]);

	const columns = [
		{
		title: 'Nombre',
		dataIndex: 'nombre',
		},
		{
		title: 'Telefono se fue',
		dataIndex: 'telefono',
		},
	];
	

	function onChange(pagination, filters, sorter, extra) {
		console.log('params', pagination, filters, sorter, extra);
	}

	console.log("Esta entrando en el modulo de usuarios");

	function showModal(){
		setVisible(true);
	}
	function handleCancel(){
		setVisible(false);
	}
	function handleOk(){
		setVisible(false);
	}


	return (
		<React.Fragment>
			<Row>
				<Col span={6}><h1> Usuarios </h1></Col>
			</Row>
			<Row>
				<Col>
					<Button type="primary" onClick={showModal} icon={<UserAddOutlined />}>
						Nuevo Usuario
					</Button>
				</Col>
			</Row>
			<br/>
			<Row>
				<Col span={24}>
					<Table columns={columns} dataSource={clientes} onChange={onChange} />
				</Col>
			</Row>

			<Modal
			title="Basic Modal"
			visible={visible}
			onOk={handleOk}
			onCancel={handleCancel}
			>
			<UsuarioForm estatus={ESTATUS_FOMR.new}></UsuarioForm>
			</Modal>	
		</ React.Fragment>
	)
}

export default Usuarios
