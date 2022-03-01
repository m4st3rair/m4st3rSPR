import React, { useState, useEffect } from 'react';

import JwtAuthService from 'services/JwtAuthService';
import axios from 'configs/AxiosConfig';
import { signOut } from 'redux/actions/Auth';
import { connect } from 'react-redux';
import { message, Row, Col, Form, Input, InputNumber, Button} from "antd";
import { useHistory } from "react-router-dom";





const Configuraciones = ({ signOut }) => {

	
    function onPanelChange(value, mode) {
        console.log(value.format('YYYY-MM-DD'), mode);
      }
	const initThings= "Este es un mensaje de lo mas comun";

	async function verificar(){
		try{
			await JwtAuthService.validar();			
		}catch(error){
			signOut();
		}
	}

	useEffect(()=>{
        verificar();
    },[]);
	

	const layout = {
		labelCol: { span: 8 },
		wrapperCol: { span: 16 },
	  };
	  
	  const validateMessages = {
		required: 'This field is required!',
		types: {
		  email: 'Not a validate email!',
		  number: 'Not a validate number!',
		},
		number: {
		  range: 'Must be between ${min} and ${max}',
		},
	  };

	 
		async function onFinish (values) {
		  console.log(values);
		};
	  
	  
	return (
		<React.Fragment>
			<Row>
				<Col span={6}><h1> Configuraciones </h1></Col>
			</Row>
			<Row>
				<Col span={12}>
				<Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'age']} label="Age" rules={[{ type: 'number', min: 0, max: 99 }]}>
        <InputNumber />
      </Form.Item>
      <Form.Item name={['user', 'website']} label="Website">
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'introduction']} label="Introduction">
        <Input.TextArea />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
				</Col>

			</Row>
		

		</ React.Fragment>
	)
}

export default connect(null, {signOut})(Configuraciones)
