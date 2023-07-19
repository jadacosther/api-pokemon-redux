import {useState} from 'react'
import {useDispatch} from 'react-redux'
import consumeApiPokemon from '../redux/actions/actions.js'
const BuscadorPokemon = ()=>{
    const dispatch = useDispatch();
    const[pokemon, setPokemon] = useState("")
    
    return(
        <>
        <input 
        type="text" 
        id="buscador"
        value={pokemon}
        onChange={event =>{
            setPokemon(event.target.value)
        }}
        />
        <button type="button"
        onClick={()=>{dispatch(consumeApiPokemon(pokemon))
        }}>Bucar Pokemon</button> 
        </>
    )
}

export default BuscadorPokemon