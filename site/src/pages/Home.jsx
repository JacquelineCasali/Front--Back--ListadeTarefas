import React from 'react'
import Hearder from "../components/Hearder"
import Novo from "../components/Novo"
import Favoritos from "../components/Favoritos"
import Outras from "../components/OutrasTarefas"

export default function Home() {
  return (
    <div>
    <Hearder/>
  
  
    <Novo/>
    <Favoritos/>
    <Outras/>
    </div>
  )
}
