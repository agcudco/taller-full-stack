import logo from './logo.svg';
import './App.css';
import ListEstudianteComponent from './component/ListEstudianteComponent';
import HeaderComponent from './component/HeaderComponent';
import FooterComponent from './component/FooterComponent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddEstudianteComponent from './component/AddEstudianteComponent';

function App() {
  return (
    <div>
        <BrowserRouter>
            <HeaderComponent/>
            <div className='container' >
                <Routes>
                    <Route exact path='/' element={<ListEstudianteComponent/>}></Route>
                    <Route path='/estudiantes' element={<ListEstudianteComponent/>}></Route>
                    <Route path='/add-estudiantes' element={<AddEstudianteComponent/>}></Route>
                </Routes>
            </div>
            <FooterComponent/>
        </BrowserRouter>
    </div>
  );
}

export default App;



