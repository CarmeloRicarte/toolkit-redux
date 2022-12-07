import { useEffect } from "react";
import { useAppDispatch } from "./store/hooks";
import { getPokemons } from "./store/slices/pokemon/thunks";

export const PokemonApp = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <>
      <h1>PokemonApp</h1>
      <hr />
      <ul>
        <li>asdf</li>
      </ul>
    </>
  );
};
