import axios from "axios";
import React, { useEffect, useState } from "react";

import "../styles/Favoritos.css"
import { IoMdColorFill } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { FaPencil,FaBook } from "react-icons/fa6";
import {FiStar } from "react-icons/fi"

import { Link } from "react-router-dom";
export default function Outras() {
  async function getTodos() {
    // axios banco de dados
    const response = await axios.get("http://127.0.0.1:5430");
    setServices(response.data);
    console.log(response.data);
  }
  // deletar
  async function deletetarefa(services) {
    await axios.delete(`http://127.0.0.1:5430/${services.id}`);
    getTodos();
  }
  //  importando do banco
  const [services, setServices] = useState([]);
  // useEffect chama a função do banco
  useEffect(() => {
    getTodos();
  }, []);

//  busca 
  return (
    <div  id="outras" >
   <h4 >Outras</h4> 
  <div className="lista-favorito">
{
            services.map((services,index)=>{
              return(
                <div className="favorito-tarefa" >
                <div className='superior'>
                 {/* <h5> Titulo</h5> */}
                 <h5 > {services.titulo}</h5>
                <a href="#favoritos" >
                <FiStar style={{height:'18px', width:"20px", color:"#455A64"}}/>
                </a> 
                </div>
                
                <p className='nota'> {services.descricao}</p>
                
               <div className='inferior'>     
               <Link to={`/${services.id}`}>
                        <FaBook
                          color="black"
                          size={17}
                          cursor="pointer"
                          className="icone"
                        />
                      </Link>
              
                      <Link to={`/edit/${services.id}`}>
                <FaPencil style={{height:'17px', width:"17px", color:"#51646E"}}/>
                </Link> 
                <Link className='icone-x' to={'#favoritos'} >
                <IoMdColorFill style={{height:'18px', width:"18px", marginRight:"250px", color:"#51646E"}}/>
                </Link> 
                
                <Link onClick={() => deletetarefa(services)}>
                <IoClose style={{height:'16px', width:"16px", color:"#51646E"}}/>
                </Link> 
               
               
                </div>
               
               </div>
              )})
    }
  
    </div>



     
    </div> 
 

  );
}