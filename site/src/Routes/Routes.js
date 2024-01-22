import React from "react";
// rotas
// qual rota ele vai chamar
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import Home from "../pages/Home";
import Cadastro from "../pages/Cadastro"
import Editar from "../pages/Editar"


const AppRoutes = () => {
  return (
    
<Router>
          
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/cadastro" element={<Cadastro />} />
        <Route exact path="/edit/:id" element={<Editar />} />
    
      </Routes>
    
      </Router>
   
  
  );
};
export default AppRoutes;
