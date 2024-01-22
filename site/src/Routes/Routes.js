import React from "react";
// rotas
// qual rota ele vai chamar
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import Home from "../pages/Home";



const AppRoutes = () => {
  return (
    
<Router>
          
      <Routes>
        <Route path="/" element={<Home />} />
      
  
    
      </Routes>
    
      </Router>
   
  
  );
};
export default AppRoutes;
