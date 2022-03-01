import fetch from 'auth/FetchInterceptor'

const JwtAuthService = {}

//Abreviacion de base service
const bs ='/login/';

JwtAuthService.login = function (data) {
	return fetch({
		url: bs + 'inicioSesion',
		method: 'POST',
		headers: {
			'public-request': 'true'
		},
		data: data
	})
}


JwtAuthService.validar = function () {
	return fetch({
		url: bs + 'valido',
		method: 'GET',
		headers: {
			'public-request': 'true'
		}
	})
}



JwtAuthService.signUp = function (data) {
	return fetch({
		url: '/usuarios/registro',
		method: 'POST',
		headers: {
      'public-request': 'true'
    },
		data: data
	})
}

export default JwtAuthService