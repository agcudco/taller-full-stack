import axios from "axios";

const USUARIO_REST_API_URL="http://localhost:8080/usuarios/";

class UsuarioService{

    getAllUsuarios(){
        return axios.get(USUARIO_REST_API_URL);
    }

    create(estudiante){
        return axios.post(USUARIO_REST_API_URL,estudiante);
    }

    getEstudianteById(estudianteId)
    {
        //http://localhost:8080/usuarios/1
        return axios.get(USUARIO_REST_API_URL+estudianteId);
    }

    updateEstudiante(estudianteId,estudiante)
    {
        return axios.put(USUARIO_REST_API_URL+estudianteId,estudiante);
    }

    deleteEstudiante(estudianteId)
    {
        return axios.delete(USUARIO_REST_API_URL+estudianteId);
    }            
}

export default new UsuarioService();