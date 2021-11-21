import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Form, Input, Alert, Select } from "antd";
import { showAuthMessage, showLoading, hideAuthMessage, authenticated } from 'redux/actions/Auth';
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion"
import JwtAuthService from 'services/JwtAuthService'
const { Option } = Select;

const rules = {
	email: [
		{ 
			required: true,
			message: 'por favoringresa tu direccion de correo'
		},
		{ 
			type: 'email',
			message: 'por favor inserta un correo'
		}
	],
	password: [
		{ 
			required: true,
			message: 'por favor introduce tu contraseña'
		}
	],
	confirm: [
		{ 
			required: true,
			message: 'por favor repite la contraseña'
		},
		({ getFieldValue }) => ({
			validator(rule, value) {
				if (!value || getFieldValue('password') === value) {
					return Promise.resolve();
				}
				return Promise.reject('las contraseñas no coinciden!');
			},
		})
	],
	nombre: [
		{ 
			required: true,
			message: 'por favor introduce tu contraseña'
		}
	],
	apellidos: [
		{ 
			required: true,
			message: 'por favor introduce tu contraseña'
		}
	],
	telefono: [
		{ 
			required: true,
			message: 'por favor introduce tu contraseña'
		}
	],
	apellidos: [
		{ 
			required: true,
			message: 'por favor introduce tu contraseña'
		}
	],
	pais: [
		{ 
			required: true,
			message: 'por favor introduce tu contraseña'
		}
	],
	region: [
		{ 
			required: true,
			message: 'por favor introduce tu contraseña'
		}
	]
}

export const RegisterForm = (props) => {

	const { showLoading, token, loading, redirect, message, showMessage, hideAuthMessage, authenticated, allowRedirect } = props
	const [form] = Form.useForm();
	let history = useHistory();

	const onSignUp = () => {
    	form.validateFields().then(values => {
			showLoading()
			const fakeToken = 'fakeToken'
			JwtAuthService.signUp(values).then(resp => {
				console.log(resp)
				authenticated(fakeToken)
				history.push(redirect)
			}).then(e => {
				showAuthMessage(e)
			})
		}).catch(info => {
			console.log('Validate Failed:', info);
		});
	}

	useEffect(() => {
    	if (token !== null && allowRedirect) {
			history.push(redirect)
		}
		if(showMessage) {
				setTimeout(() => {
				hideAuthMessage();
			}, 3000);
		}
  });
	
	return (
		<>
			<motion.div 
				initial={{ opacity: 0, marginBottom: 0 }} 
				animate={{ 
					opacity: showMessage ? 1 : 0,
					marginBottom: showMessage ? 20 : 0 
				}}> 
				<Alert type="error" showIcon message={message}></Alert>
			</motion.div>
			<Form form={form} layout="vertical" name="register-form" onFinish={onSignUp}>



				<Form.Item 
					name="email" 
					label="Email" 
					rules={rules.email}
					hasFeedback
					>
					<Input prefix={<MailOutlined className="text-primary" />}/>
				</Form.Item>
				<Form.Item 
					name="password" 
					label="Password" 
					rules={rules.password}
					hasFeedback
					>
				
				<Input.Password prefix={<LockOutlined className="text-primary" />}/>
				</Form.Item>
				<Form.Item 
					name="confirm" 
					label="ConfirmPassword" 
					rules={rules.confirm}
					hasFeedback
					>
				<Input.Password prefix={<LockOutlined className="text-primary" />}/>
				</Form.Item>
				
				<Form.Item
					name="nombre"
					label="Nombre"
					rules={rules.nombre}
					hasFeedback
				>
					<Input />
				</Form.Item>
				
				<Form.Item
					name="apellidos"
					label="Apellido"
					rules={rules.apellidos}
					hasFeedback
				>
					<Input />
				</Form.Item>
				<Form.Item
					name="telefono"
					label="Telefono"
					rules={rules.telefono}
					hasFeedback
				>
					<Input />
				</Form.Item>

				<Form.Item
					name="pais"
					label="Pais"
					rules={rules.pais}
					hasFeedback
				>
					<Select>
						<Option value="1">Mexico</Option>
					</Select>
				</Form.Item>
				
				<Form.Item
					name="region"
					label="Region/Estado"
					rules={rules.region}
					hasFeedback
				>
					<Select>
						<Option value="1">Puebla</Option>
					</Select>
				</Form.Item>
				
				<Form.Item>
					<Button type="primary" htmlType="submit" block loading={loading}>
						Sign Up
					</Button>
				</Form.Item>
			</Form>
		</>
	)
}

/**
 *  nombre			*
    apellidos		*
    telefono
    pais
    region			
    email_auxiliar	*
*/
const mapStateToProps = ({auth}) => {
	const { loading, message, showMessage, token, redirect } = auth;
  return { loading, message, showMessage, token, redirect }
}

const mapDispatchToProps = {
	showAuthMessage,
	hideAuthMessage,
	showLoading,
	authenticated
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm)
