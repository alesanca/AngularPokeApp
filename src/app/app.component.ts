import {
  Component,
  Input,
  ɵConsole
} from '@angular/core';
import {
  PokedexService
} from './services/pokedex.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pokeApp';


  constructor() {}


  /*getInfo(name) {
    this.pokemonService.getPokemon(name)
      .then(results => {
          this.pokeInfo.name = results.species.name;
          this.pokeInfo.url = results.sprites.front_default;
          this.pokeInfo.id = results.id;
          this.pokeInfo.skill1 = results.abilities[0].ability.name;
          this.pokeInfo.skill2 = results.abilities[1].ability.name;
          this.pokeInfo.type = results.types[0].type.name;
          this.pokeInfo.atk = results.stats[1].base_stat;
          this.pokeInfo.def= results.stats[2].base_stat;
          this.pokeInfo.speAtk= results.stats[3].base_stat;
          this.pokeInfo.speDef= results.stats[4].base_stat;
          this.pokeInfo.hp = results.stats[0].base_stat;
          console.log(this.pokeInfo);
        })
      }*/
  }
