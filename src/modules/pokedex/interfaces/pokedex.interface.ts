export interface PokemonInPokedex{
    id:number;
    nombre: string;
    peso:number;
    sprites: string[],
    movimientos:string[],
    tipos: string[]
    img:string;
}

export interface GetPokemonsResp{
    pokemons:PokemonInPokedex[];
    previous: string;
    next:string;
}