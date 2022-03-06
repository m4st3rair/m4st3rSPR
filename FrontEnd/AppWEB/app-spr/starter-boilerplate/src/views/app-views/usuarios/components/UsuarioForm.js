import React, { useState, useEffect } from 'react';

import JwtAuthService from 'services/JwtAuthService';

import { signOut } from 'redux/actions/Auth';
import { connect } from 'react-redux';
import { message, Form, Input, InputNumber, Button} from "antd";
import { useHistory } from "react-router-dom";




export const UsuarioForm = (props) => {


	const validateMessages = {
		required: 'Este campo es requerido!',
		types: {
		  number: 'No es un numero valido!',
		}
	  };

	  const layout = {
		labelCol: { span: 8 },
		wrapperCol: { span: 16 },
	  };


	async function onFinish (values){
		console.log(values);
	};

	

	return (

		<React.Fragment>

			<h1>Nuevo Usuario</h1>
			<Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
				<Form.Item name={['usuario', 'name']} label="Nombre" rules={[{ required: true }]}>
					<Input />
				</Form.Item>
				<Form.Item name={['usuario', 'telefono']} label="Telefono" rules={[{ required: true }]}>
					<Input />
				</Form.Item>

				<Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
					<Button type="primary" htmlType="submit">
						Registrar
					</Button>
				</Form.Item>
			</Form>
	
		</React.Fragment>
	)
}

export default connect()(UsuarioForm)
