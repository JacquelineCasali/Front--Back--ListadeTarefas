import React  from 'react'
import { Link } from 'react-router-dom'
import "../styles/Hearder.css"
import Simbolo from "../assets/image 8.png"
import Nome from "../assets/Group 2430.png"
import { IoClose } from "react-icons/io5";

export default function Navbar() {
// menu

    return (
    <div className='header'>
      <div className='container'>
      <img src={Simbolo} alt=''/>
      <img src={Nome} alt=''/>

      {/* barra de pesquisa */}
    <p>Barra de pesquisa</p>    
 
      <Link className='icone-x' to={'/'} >   
      <IoClose style={{ color:"#51646E"}}/>

     </Link>
       {/* <img  src={icone}  alt="Logo"/></Link>
     */}




      </div>
    </div>
  )
}
