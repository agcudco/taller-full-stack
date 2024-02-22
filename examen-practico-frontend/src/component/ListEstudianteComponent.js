import React, { useEffect, useState } from 'react'
import UsuarioServices from '../services/UsuarioServices';
import { Link } from 'react-router-dom';

export const ListEstudianteComponent = () => {

    const [estudiantes,setEstudiantes]=useState([]);

    useEffect(()=>{
        listarTodos();
    },[])

    const listarTodos = () =>{
        UsuarioServices.getAllUsuarios().then(response=>{
            setEstudiantes(response.data);
            console.log(response.data);
        }).catch(error=>{
            console.log(error);
        })
    }


  return (
    <div className='container'>
        <h2 className='text-center'>Estudiantes Registrados</h2>

        <Link to="add-estudiantes" className='btn btn-primary mb-2'>Nuevo</Link>
        <table className='table table-bordered table-striped'>
            <thead>
                <th>ID</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Email</th>
                <th>Estado</th>
                <th>Fecha de Creacion</th>
            </thead>
            <tbody>
                {
                    estudiantes.map(
                        estudiante=>
                        <tr key={estudiante.id}>
                            <td>{estudiante.id}</td>
                            <td>{estudiante.nombre}</td>
                            <td>{estudiante.apellido}</td>
                            <td>{estudiante.email}</td>
                            <td>{estudiante.estado}</td>
                            <td>{estudiante.fechaCreacion}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListEstudianteComponent;
