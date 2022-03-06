import fetch from 'auth/FetchInterceptor'

const usuarioService = {}

//Abreviacion de base service
const bs ='/usuarios/';

usuarioService.nuevoUsuario = function (data) {
  return fetch({
    url: bs+'',
    method: 'get',
    data: data
  })
}

usuarioService.setPost = function (params) {
  return fetch({
    url: '/posts',
    method: 'post',
    params: params
  })
}

export default usuarioService