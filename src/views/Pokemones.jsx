import { useContext } from "react"
import { PokemonContext } from "../context/pokemonContext"
import { useNavigate } from "react-router-dom"
import Container from "react-bootstrap/esm/Container"
import Swal from 'sweetalert2'

const Pokemones = () => {
    const {pokemons, setPokemons, selectedPokemon, setSelectedPokemon} = useContext(PokemonContext)
    const navigate = useNavigate()

    const Handle_selected_pokemon = () =>{
        if(selectedPokemon){
            navigate(`/Pokemones/${selectedPokemon}`)
        }
        else{
            Swal.fire("Selecciona un pokemón por favor")
        }
    }
    return (
        <div className="Pokemons_View">
            <h1 className="m-2">Selecciona un Pokemón inicial:</h1>
            <h5 className="m-2">Aquí tenemos información sobre las 3 primeras opciones y sus evoluciones!</h5>
            <Container>
                <select 
                    className="Pokemon_select"
                    value={selectedPokemon}
                    onChange={({target}) => setSelectedPokemon(target.value)}
                >
                    <option value="" disabled>Seleccione un Pokemón</option>
                    {pokemons.map((pokemon) =>{
                        return(
                            <option style={{textTransform: 'capitalize'}} key={pokemon.name} value={pokemon.name}>{pokemon.name}</option>
                        )
                    })}
                </select>
                <article>
                    <button
                        className="btn btn-dark"
                        onClick={Handle_selected_pokemon}
                    >
                        Ver detalles
                    </button>
                </article>
            </Container>
        </div>
    )
}

export default Pokemones