import axios from "axios";
import React, { useEffect, useState } from "react";

import "../styles/Favoritos.css"
import { IoMdColorFill } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { FaPencil } from "react-icons/fa6";
import {FiStar } from "react-icons/fi"

import { Link } from "react-router-dom";
export default function Outras() {
  const [services, setServices] = useState([]);


  useEffect(() => {
    
    // axios.get('http://localhost:7000/services/')
    axios.get('http://127.0.0.1:5430')
      .then((res) => {
        console.log(res);
        setServices(res.data);
      })
      .catch((err) => console.log(err));
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
                 <Link className='icone-x' to={'/editar'} >
                <FaPencil style={{height:'17px', width:"17px", color:"#51646E"}}/>
                </Link> 
                <Link className='icone-x' to={'#favoritos'} >
                <IoMdColorFill style={{height:'18px', width:"18px", marginRight:"250px", color:"#51646E"}}/>
                </Link> 
                <Link className='icone-x' to={'/'} >   
                
                <IoClose style={{height:'14px', width:"14px", color:"#51646E"}}/>
                </Link> 
                </div>
               
               </div>
              )})
    }
  
    </div>



     
    </div> 
 

  );
}