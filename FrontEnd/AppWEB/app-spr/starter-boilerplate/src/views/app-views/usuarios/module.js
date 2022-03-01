import React, { useState, useEffect } from 'react';

import UsuarioForm from './components/UsuarioForm';
import {ESTATUS_FOMR} from 'configs/AppConfig';
import { signOut } from 'redux/actions/Auth';
import { connect } from 'react-redux';
import { UserAddOutlined } from '@ant-design/icons';
import { message, Button, Table, Row, Col} from "antd";
import { useHistory } from "react-router-dom";




const Usuarios = () => {

	

	const columns = [
		{
		  title: 'Name',
		  dataIndex: 'name',
		},
		{
		  title: 'Chinese Score',
		  dataIndex: 'chinese',
		  sorter: {
			compare: (a, b) => a.chinese - b.chinese,
			multiple: 3,
		  },
		},
		{
		  title: 'Math Score',
		  dataIndex: 'math',
		  sorter: {
			compare: (a, b) => a.math - b.math,
			multiple: 2,
		  },
		},
		{
		  title: 'English Score',
		  dataIndex: 'english',
		  sorter: {
			compare: (a, b) => a.english - b.english,
			multiple: 1,
		  },
		},
	  ];
	  
	  const data = [
		{
		  key: '1',
		  name: 'John Brown',
		  chinese: 98,
		  math: 60,
		  english: 70,
		},
		{
		  key: '2',
		  name: 'Jim Green',
		  chinese: 98,
		  math: 66,
		  english: 89,
		},
		{
		  key: '3',
		  name: 'Joe Black',
		  chinese: 98,
		  math: 90,
		  english: 70,
		},
		{
		  key: '4',
		  name: 'Jim Red',
		  chinese: 88,
		  math: 99,
		  english: 89,
		},
	  ];


	function onChange(pagination, filters, sorter, extra) {
		console.log('params', pagination, filters, sorter, extra);
	}

	console.log("Esta entrando en el modulo de usuarios");

	return (
		<React.Fragment>
			<Row>
				<Col span={6}><h1> Usuarios </h1></Col>
			</Row>
			<Row>
				<Col>
					<Button icon={<UserAddOutlined />}>
						Nuevo Usuario
					</Button>
				</Col>
			</Row>
			<br/>
			<Row>
				<Col span={24}>
					<Table columns={columns} dataSource={data} onChange={onChange} />
				</Col>
			</Row>

			<UsuarioForm estatus={ESTATUS_FOMR.new}></UsuarioForm>
		</ React.Fragment>
	)
}

export default Usuarios
