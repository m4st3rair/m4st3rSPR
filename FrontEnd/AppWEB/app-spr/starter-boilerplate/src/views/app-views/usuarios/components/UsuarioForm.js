import React, { useState, useEffect } from 'react';

import JwtAuthService from 'services/JwtAuthService';
import axios from 'configs/AxiosConfig';
import { signOut } from 'redux/actions/Auth';
import { connect } from 'react-redux';
import { message} from "antd";
import { useHistory } from "react-router-dom";




export const UsuarioForm = (props) => {

	


	

	return (
		<>




			<div>
				El Componente es lo mejor :v {props.estatus}

			</div>
		</>
	)
}

export default connect()(UsuarioForm)
