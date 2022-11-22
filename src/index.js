import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home'


export default function App(){
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element = {<Home />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)

