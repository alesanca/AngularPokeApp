import { Injectable } from '@angular/core';
import axios from '../../../node_modules/axios';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  inputPokeUrl = " https://pokeapi.co/api/v2/pokemon/";
  allPokeUrl = "https://pokeapi.co/api/v2/pokemon?limit=";
  allPokeUrl2= "&offset=";

  constructor() {}

    getPokemons(a, b): Promise<any>{
      return axios.get(`${this.allPokeUrl}${a}${this.allPokeUrl2}${b}`).then(response => response.data);
    }

    getPokemon(newName): Promise<any>{
      return axios.get(`${this.inputPokeUrl}${newName}`).then(response => response.data);
    }

}
