import { useContext } from "react";
import { PokemonContext } from "../context/pokemonContext";

const Gallery = () => {
    const {pokemons, setPokemons} = useContext(PokemonContext)
  
    console.log('data context: ', pokemons)
    return (
    <>
        <div className="gallery grid-columns-5 p-3">
        {pokemons.map((pokemon) => (
            <div>
            <section>
                <p> {pokemon.name} </p> {/* aquí se inserta la descripción de la fotografía */}
                <a href={pokemon.url}>{pokemon.url}</a>
                {/* aquí se podría agregar más info sobre la foto */}
            </section>
            </div>
        ))
        }
        </div>;
    </>)
}
export default Gallery;
  