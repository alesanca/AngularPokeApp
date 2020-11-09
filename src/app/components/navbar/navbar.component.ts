import {
  Component,
  Input,
  OnInit,
  Output
} from '@angular/core';
import {
  PokedexService
} from '../../services/pokedex.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private pokemonService: PokedexService) {}

  @Input() newName: string;
  public showInput = false;
  public show;
  public teamPokemon: any[] = [];
  public test;
  public pokedex: any[] = [];
  public arrayPokemon: any[] = [];
  public pokeSearch = { name: "", url: "", id: 0 };
  public searchPokedex: any[] = [];

  showPokemons(a, b) {
    this.arrayPokemon = [];
    this.show = false;
    this.showInput = false;
    this.teamPokemon = [];

    this.pokemonService.getPokemons(a, b)
      .then(r => {
        this.pokedex = r.results;
        return this.pokedex;
      })
    for (let i = 0; i < this.pokedex.length; i++) {
      let newName = this.pokedex[i].name;
      this.pokemonService.getPokemon(newName)
        .then(results => {
          this.pokeSearch.name = results.species.name;
          this.pokeSearch.url = results.sprites.front_default;
          this.pokeSearch.id = results.id;
          this.arrayPokemon[i] = this.pokeSearch;
          this.pokeSearch = {
            name: "",
            url: "",
            id: 0
          }
        })
    }
  }

  searchPokemon(input) {
    this.arrayPokemon = [];
    this.show = false;
    this.showInput = false;

    let newName = input.toLowerCase();
    this.pokemonService.getPokemon(newName)
      .then(results => {
        this.searchPokedex[0] = results.species.name;
        this.searchPokedex[1] = results.sprites.front_default;
      })
    this.showInput = true;
  };

  showTeam() {
    this.show = false;
    this.showInput = false;
    this.arrayPokemon = [];
    this.teamPokemon = JSON.parse(localStorage.getItem("team"));
    for (let e = 1; e <= this.teamPokemon.length; e++) {
      this.teamPokemon[e].pos = e;
    }
  }

  ngOnInit(): void {}
}
