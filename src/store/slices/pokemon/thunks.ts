import { createAsyncThunk } from "@reduxjs/toolkit";
import { store } from "../..";
import { pokemonApi } from "../../../api";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice";

export const getPokemons = createAsyncThunk(
  "pokemon/getPokemons",
  async (page: number = 0) => {
    store.dispatch(startLoadingPokemons());
    /* const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`
    );
    const data = await response.json(); */
    const { data } = await pokemonApi.get(
      `pokemon?limit=10&offset=${page * 10}`
    );

    store.dispatch(
      setPokemons({
        pokemons: data?.results,
        page: page + 1,
        isLoading: false,
      })
    );
  }
);
