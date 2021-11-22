import React from 'react'
import axios from 'configs/AxiosConfig';
import { message} from "antd";
import { useHistory } from "react-router-dom";




const Home = () => {
	
	let history = useHistory();
	
	const initThings= "Este es un mensaje de lo mas comun";
	async function verificar(){
		try{
			axios.defaults.headers.common = {'Authorization': `Bearer ${localStorage.getItem('JsonWebToken')}`}
			const deleteCache = await axios.get(`/verificar`);
			console.log(deleteCache);
			message.info("Bienvenido de Nuevo :) ")
			
		}catch(error){
			console.error(error);
			message.error("Inicio se sesion Invalido Por favor Inicia sesion de nuevo")
			history.push('/auth/login')
		}
	}
	verificar();
	

	return (
		<>




			<div>
				Home component works!
				{initThings}
			</div>
		</>
	)
}

export default Home
