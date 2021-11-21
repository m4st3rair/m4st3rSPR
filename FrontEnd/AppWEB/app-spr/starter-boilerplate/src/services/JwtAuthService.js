import fetch from 'auth/FetchInterceptor'

const JwtAuthService = {}

JwtAuthService.login = function (data) {
	return fetch({
		url: '/login',
		method: 'POST',
		headers: {
      'public-request': 'true'
    },
		data: data
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