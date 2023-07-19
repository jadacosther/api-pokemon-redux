import axios from 'axios'

export const CONSUME_POKEMON_SUCCESS = 'CONSUME_POKEMON_SUCCESS'
export const CONSUME_POKEMON_REQUEST = 'CONSUME_POKEMON_REQUEST'
export const CONSUME_POKEMON_ERROR = 'CONSUME_POKEMON_ERROR'

//Actions
export const fecthPokemonRequest = () =>{
    return {
        type:CONSUME_POKEMON_REQUEST,
    }
}

export const fecthPokemonSuccess = (response) =>{
    return {
        type:CONSUME_POKEMON_SUCCESS,
        payload: response
    }
}

export const fecthPokemonError = (error) =>{
    return {
        type:CONSUME_POKEMON_ERROR,
        payload: error
    }
}


//function
const consumeApiPokemon = (Pokemon) =>{
    return (dispatch)=>{
        dispatch(fecthPokemonRequest());
        axios.get(`https://pokeapi.co/api/v2/pokemon/${Pokemon}`)
        .then(function(response) {
            dispatch(fecthPokemonSuccess(response.data));
          })
        .catch((error)=>{
            dispatch(fecthPokemonError(`No se encontro el pokemon ${error}`));
        }); 
}
}

export default consumeApiPokemon