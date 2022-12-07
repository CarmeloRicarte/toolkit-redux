import { useEffect } from "react";
import { useAppDispatch } from "./store/hooks";
import { getPokemons } from "./store/slices/pokemon/thunks";
import { useAppSelector } from "./store/hooks";

export const PokemonApp = () => {
  const dispatch = useAppDispatch();
  const pokemonState = useAppSelector((state) => state.pokemons);
  const { isLoading, pokemons = [], page } = pokemonState;
  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <>
      <h1>PokemonApp</h1>
      <hr />
      <span>Loading: {isLoading ? "true" : "false"} </span>
      <ul>
        {pokemons.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <span>Current Page: {page}</span>
      <button disabled={isLoading} onClick={() => dispatch(getPokemons(page))}>
        Next page
      </button>
    </>
  );
};
