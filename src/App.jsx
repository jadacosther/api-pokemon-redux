//import { useState } from 'react'
import './App.css'
import BuscadorPokemon from './components/BuscadorPokemon.jsx'
import DetallePokemon from './components/DetallePokemon.jsx'
function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
    <label> Buscador de Pokemons
    <BuscadorPokemon></BuscadorPokemon>
    </label>
    <DetallePokemon></DetallePokemon>
    </>
  )
}

export default App
