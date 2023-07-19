import {
    CONSUME_POKEMON_SUCCESS,
    CONSUME_POKEMON_REQUEST, 
    CONSUME_POKEMON_ERROR
}from '../actions/actions'

const initialState = {
    loading: false, 
    pokemon: null,
    error:""
}

function buscadorPokemonReducer(state = initialState, action) {
  switch (action.type) {
    case CONSUME_POKEMON_REQUEST:
      return { ...state, 
               loading: true }
    case CONSUME_POKEMON_SUCCESS:
      return { ...state, 
                loading: false,
                pokemon: action.payload }
    case CONSUME_POKEMON_ERROR:
      return { ...state, 
                loading: false,
                pokemon: null,  
                error: action.payload }
    default:
      return state
  }
}

export default buscadorPokemonReducer