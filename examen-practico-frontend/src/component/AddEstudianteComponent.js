import React, { useEffect, useState } from 'react'
import UsuarioServices from '../services/UsuarioServices';
import { Link, useNavigate, useParams } from 'react-router-dom';

export const AddEstudianteComponent = () => {

    const [nombre,setNombre]=useState('');
    const [apellido,setApellido]=useState('');
    const [email,setEmail]=useState('');
    const [estado,setEstado]=useState('');
    const [fechaCreacion,setFechaCreacion]=useState('');
    const [passwd,setPasswd]=useState('');

    const navigate = useNavigate();

    const {id} = useParams();

    const createEstudiante = (e)=>{
        e.preventDefault();
        const estudiante = {nombre,apellido,email,passwd,estado,fechaCreacion};
        if(id){
            UsuarioServices.updateEstudiante(id,estudiante).then((response)=>{
                console.log(response.data);
                navigate('/estudiantes');
            }).catch(error=>{
                console.log(error);
            })            
        }else{
            UsuarioServices.create(estudiante).then((response)=>{
                console.log(response.data);
                navigate('/estudiantes');
            }).catch(error=>{
                console.log(error);
            })
        }        
    }

    useEffect(()=>{
        UsuarioServices.getEstudianteById(id).then((response)=>{
            setNombre(response.data.nombre);
            setApellido(response.data.apellido);
            setEmail(response.data.email);
            setEstado(response.data.estado);
            setFechaCreacion(response.data.fechaCreacion);
            setPasswd(response.data.passwd);
        }).catch(error=>{
            console.log(error);
        })
    },[])

    const title=()=>{
        if(id){
            return <h2 className='text-center'>Actualizar Datos</h2>
        }else{
            return <h2 className='text-center'>Nuevo estudiante</h2>
        }
    }

  return (
    <div>
        <div className='container'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    
                    <h2 className='text-center'>
                        {
                            title()
                        }
                    </h2>
                
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Nombres:</label>
                                <input
                                    type='text'
                                    placeholder='Ingrese su nombre'
                                    name='nombre'
                                    className='form-control'
                                    value={nombre}
                                    onChange={(e)=>setNombre(e.target.value)}
                                />
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Apellidos:</label>
                                <input
                                    type='text'
                                    placeholder='Ingrese su nombre'
                                    name='apellido'
                                    className='form-control'
                                    value={apellido}
                                    onChange={(e)=>setApellido(e.target.value)}
                                />
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Email:</label>
                                <input
                                    type='text'
                                    placeholder='Ingrese su email'
                                    name='email'
                                    className='form-control'
                                    value={email}
                                    onChange={(e)=>setEmail(e.target.value)}
                                />
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Password:</label>
                                <input
                                    type='password'                                    
                                    name='email'
                                    className='form-control'
                                    value={passwd}
                                    onChange={(e)=>setPasswd(e.target.value)}
                                />
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Estado:</label>
                                <input
                                    type='text'
                                    placeholder='Activo/Pendiente'
                                    name='estado'
                                    className='form-control'
                                    value={estado}
                                    onChange={(e)=>setEstado(e.target.value)}
                                />
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Fecha de creacion:</label>
                                <input
                                    type='date'
                                    placeholder='Activo/Pendiente'
                                    name='estado'
                                    className='form-control'
                                    value={fechaCreacion}
                                    onChange={(e)=>setFechaCreacion(e.target.value)}
                                />
                            </div>

                            <button className='btn btn-success'
                                onClick={(e)=>createEstudiante(e)}>Guardar</button>
                            &nbsp; &nbsp;
                            <Link to='/' className='btn btn-danger'>Cancelar</Link>
                        </form>
                    </div>
                
                </div>

            </div>

        </div>
    </div>
  )
}

export default AddEstudianteComponent;
