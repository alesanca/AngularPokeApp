import {
  Component,
  Input,
  OnInit
} from '@angular/core';
import {
  PokedexService
} from '../../services/pokedex.service';

@Component({
  selector: 'app-show-pokemon',
  templateUrl: './show-pokemon.component.html',
  styleUrls: ['./show-pokemon.component.css']
})
export class ShowPokemonComponent implements OnInit {

  constructor(private pokemonService: PokedexService) {}

  @Input() arrayPokemon: any[];
  @Input() searchPokedex: any[];
  @Input() teamPokemon: any[];
  @Input() show;
  @Input() showInput;
  public pokeInfo = { name: "", url: "", id: 0, skill1: "", skill2: "", type: "", atk: 0, def: 0, speAtk: 0, speDef: 0, hp: 0, pos: 0 };


  ngOnInit(): void {}

  getInfo(name) {
    this.show = true;
    console.log(name);
    this.pokemonService.getPokemon(name)
      .then(results => {
        this.show = true;
        this.pokeInfo.name = results.species.name;
        this.pokeInfo.url = results.sprites.front_default;
        this.pokeInfo.id = results.id;
        this.pokeInfo.skill1 = results.abilities[0].ability.name;
        this.pokeInfo.skill2 = results.abilities[1].ability.name;
        this.pokeInfo.type = results.types[0].type.name;
        this.pokeInfo.atk = results.stats[1].base_stat;
        this.pokeInfo.def = results.stats[2].base_stat;
        this.pokeInfo.speAtk = results.stats[3].base_stat;
        this.pokeInfo.speDef = results.stats[4].base_stat;
        this.pokeInfo.hp = results.stats[0].base_stat;
      })
  }

  deletePokemon(position) {
    for (let i = 0; i < this.teamPokemon.length; i++) {
      if (position == this.teamPokemon[i].pos) {
        this.teamPokemon.splice(position, 1);
      }
    }
    localStorage.setItem('team', JSON.stringify(this.teamPokemon));
  }

}
