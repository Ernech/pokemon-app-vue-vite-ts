import pokemonApi from "../../../api/pokemonApi";
import type { GetPokemonsResp, PokemonInPokedex } from "../interfaces/pokedex.interface";


export const getPokemons = async (url: string):Promise<GetPokemonsResp> => {
  const resp = await pokemonApi.get(url);
  const results = resp.data.results;

  const pokemonPromises = results.map((result:any) => pokemonApi.get(result.url));
  const pokemonResponses = await Promise.all(pokemonPromises);

  const pokemons = pokemonResponses.map((response) => {
    const data = response.data;
    const sprites = getSprites(data.sprites);
    const moves = getMoves(data.moves);
    const types = getTypes(data.types);

    return {
      id: data.id,
      nombre: data.name,
      peso: data.weight,
      sprites: sprites,
      movimientos: moves,
      tipos: types,
      img: data.sprites.front_default,
    };
  });

  return {pokemons,next:resp.data.next,previous:resp.data.previous};
};

export const searchPokemon=async(pokemon:string):Promise<PokemonInPokedex>=>{
 try {
    const resp = await pokemonApi.get(`/${pokemon}`);
    const data = resp.data;
    const sprites = getSprites(data.sprites);
    const moves = getMoves(data.moves);
    const types = getTypes(data.types);

    return {
      id: data.id,
      nombre: data.name,
      peso: data.weight,
      sprites: sprites,
      movimientos: moves,
      tipos: types,
      img: data.sprites.front_default,
    };
 } catch (error) {
    
    return {
        id: -1,
        nombre: '',
        peso: 0,
        sprites: [],
        movimientos: [],
        tipos: [],
        img: '',
      };
 }

}

const getSprites = (sprites: any): string[] => {
  return [sprites.back_default, sprites.back_shiny, sprites.front_default, sprites.front_shiny];
};

const getMoves = (moves: any): string[] => {
  return moves.map((move: any) => move.move.name);
};

const getTypes = (types: any): string[] => {
  return types.map((type: any) => type.type.name);
};