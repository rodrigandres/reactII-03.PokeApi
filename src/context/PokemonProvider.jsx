import { PokemonContext } from './PokemonContext';
import { useState, useEffect, useContext } from 'react';

export const PokemonProvider = ({ children }) => {
    const [allPokemons, setallPokemons] = useState([])
    const [offset, setOffset] =useState(0)
    const [Loading, setLoading] =useState(true)


    const getAllPokemons = async(limit = 50) => {
    const baseURL = 'https://pokeapi.co/api/v2/'

    const res = await fetch (`${baseURL}pokemon?limit=${limit}&offset=${offset}`)
    const data = await res.json();

    const promises = data.results.map(async(pokemon) => {
        const res = await fetch(pokemon.url)
        const data = await res.json()
        return data
    })
    const results = await Promise.all(promises)

    setallPokemons(results)
    setLoading(false)
    }

    // Llamar pokemones por ID 
    const getPokemonsByID = async(id) => {
        const baseURL = 'https://pokeapi.co/api/v2/'

        const res = await fetch (`${baseURL}pokemon/${id}`)
        const data = await res.json()
        return data
    }

    useEffect(() => {
        getAllPokemons()
    }, [])
    

    return (
        <PokemonContext.Provider 
        value={{
            allPokemons,
            getAllPokemons,
            getPokemonsByID
        }}>
            { children }
        </PokemonContext.Provider>
    );
};

export const usePokemonContext = () => useContext(PokemonContext)