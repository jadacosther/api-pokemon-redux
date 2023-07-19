import { useEffect } from 'react';
import {useSelector} from 'react-redux'

const DetallePokemon = () => {
    const pokemonData = useSelector(state => state.pokemon);
    const loading = useSelector(state => state.loading);
    
    return(
        <>
            <h1>{loading ? 'Cargando... :' : 'Success' }</h1>
            <div><label> Pokemon </label> <img src={pokemonData ? pokemonData.sprites.front_default : ""}/></div>  
        </>
    )
}
export default DetallePokemon