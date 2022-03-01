import React, { useState, useEffect } from 'react';

import JwtAuthService from 'services/JwtAuthService';
import axios from 'configs/AxiosConfig';
import { signOut } from 'redux/actions/Auth';
import { connect } from 'react-redux';
import { message, Calendar} from "antd";
import { useHistory } from "react-router-dom";





const NuevaNotificaion= ({ signOut }) => {

	
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
	

	return (
		<>




			<div>
				NuevaNotificaion				
			</div>
            <div><Calendar onPanelChange={onPanelChange} /></div>
		</>
	)
}

export default connect(null, {signOut})(NuevaNotificaion);
