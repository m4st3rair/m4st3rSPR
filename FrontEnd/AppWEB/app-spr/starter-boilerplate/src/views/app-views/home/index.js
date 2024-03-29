import React, { useState, useEffect } from 'react';

import JwtAuthService from 'services/JwtAuthService';
import axios from 'configs/AxiosConfig';
import { signOut } from 'redux/actions/Auth';
import { connect } from 'react-redux';
import { message} from "antd";
import { useHistory } from "react-router-dom";




const Home = ({ signOut }) => {

	
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
	

	return (
		<>




			<h1>
				Dashboard
			</h1>
		</>
	)
}

export default connect(null, {signOut})(Home)
