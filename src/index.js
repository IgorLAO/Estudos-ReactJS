import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Compras from './pages/listadeCompras';
import ListaAluno from './pages/alunosPerfis';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<App/>}/>
    <Route path='/Compras' element={<Compras/>} />
    <Route path='/alunos' element={<ListaAluno/>} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

