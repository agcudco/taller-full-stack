import axios from "axios";

const USUARIO_REST_API_URL="http://localhost:8080/usuarios/";

class UsuarioService{

    getAllUsuarios(){
        return axios.get(USUARIO_REST_API_URL);
    }

    create(estudiante){
        return axios.post(USUARIO_REST_API_URL,estudiante);
    }
}

export default new UsuarioService();