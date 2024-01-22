import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Favoritos.css"
import { IoIosStar,IoMdColorFill } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { FaPencil,FaBook } from "react-icons/fa6";
export default function Favorito() {
  const [services, setServices] = useState([]);


  useEffect(() => {
    // axios.get('http://127.0.0.1:5430')
    axios.get("https://lista-tarefa.onrender.com")
      .then((res) => {
        console.log(res);
        setServices(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
//  busca 
  return (
    <div className="favoritos" id="favoritos">
   <h4 >Favoritas</h4> 
  <div className="lista-favorito">
  {
            services.map((services,index)=>{
              return(
                <div className="favorito-tarefa" >
                <div className='superior'>
                 {/* <h5> Titulo</h5> */}
                 <h5 > {services.titulo}</h5>
                <a href="#favoritos" >
                <IoIosStar style={{height:'18px', width:"20px", color:"#FFA000"}}/>
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