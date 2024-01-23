import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import { Link } from 'react-router-dom'
import {FiStar } from "react-icons/fi"

import "../styles/Novo.css"
export default function Novo() {
 
  return (
    <div >
      <HelmetProvider>
      <Helmet
      
      title="Lista de Tarefas" />
    </HelmetProvider>
     
      <div className="lista-tarefa">
      <div className="nova-tarefa" >
     <div className='superior'>
          <h5> Titulo</h5>
        
     <Link className='icone-x' to={'#favoritos'} >
     <FiStar style={{height:'18px', width:"20px", color:"#455A64"}}/>
     </Link> 
     </div>
     {/* <div className='meio'> */}

     <Link style={{cursor:"pointer"}} to={'/cadastro'} >
     <p className='cria-nota'> Criar nota</p>
        </Link>
     {/* </div> */}
   
   
    </div>
    </div>
    </div>
  )}
