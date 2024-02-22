import React from 'react'

export const HeaderComponent = () => {
  return (
    <div>
        <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
            <div>
                <a href='/' className='navbar-brand'>Estudiantes</a>
                <a href='/cursos' className='navbar-brand'>Cursos</a>
                <a href='/perfil' className='navbar-brand'>Perfil</a>
            </div>
        </nav>
    </div>
  )
}

export default HeaderComponent;
