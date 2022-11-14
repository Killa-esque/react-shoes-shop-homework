import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ShoesStore from './Pages/ShoesShop/ShoesStore';
import Template from './Template/Template';
import Shop from './Pages/Shop/Shop';
// Router
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Template />}>
          <Route path='home' element={<ShoesStore/>}></Route>
          <Route path='shop' element={<Shop/>}></Route>
          <Route path='*' element={<Navigate to='home'/>}></Route>
          <Route path='/' element={<Navigate to='home'/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);

