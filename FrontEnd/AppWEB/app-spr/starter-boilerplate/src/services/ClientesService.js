import { API_BASE_URL } from 'configs/AppConfig'
import fetch from 'auth/FetchInterceptor'

const ClientesService = {}
const baseService="/cliente/";
const idLocal = localStorage.getItem("id_local");

ClientesService.getClientes = function () {
  return fetch({
    url: baseService + "todos",
    method: 'get',
    params: {idLocal}
  })
}

ClientesService.setPost = function (data) {
  return fetch({
    url: '/posts',
    method: 'post',
    data: data
  })
}

export default ClientesService