import React, { useState, useEffect } from 'react';
import moment from 'moment';
import JwtAuthService from 'services/JwtAuthService';
import axios from 'configs/AxiosConfig';
import { signOut } from 'redux/actions/Auth';
import { connect } from 'react-redux';
import { Row, Col, DatePicker, Table, Button} from "antd";
import { ScheduleOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";







const Agenda = ({ signOut }) => {

	
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

	return (
<React.Fragment>
			<Row>
				<Col span={6}><h1> Agenda </h1></Col>
			</Row>
			<Row>
				<Col span={12}>
					<DatePicker defaultValue={moment('01/01/2015', "DD-MM-YYYY")} format={"DD-MM-YYYY"} />
				</Col>
				<Col>
				<Button icon={<ScheduleOutlined />}>
						Nueva Cita
					</Button>
				</Col>
			</Row>
			<br/>
			<Row>
				<Col span={24}>
					<Table columns={columns} dataSource={data} onChange={onChange} />
				</Col>
			</Row>

		</ React.Fragment>
	)
}

export default connect(null, {signOut})(Agenda)
