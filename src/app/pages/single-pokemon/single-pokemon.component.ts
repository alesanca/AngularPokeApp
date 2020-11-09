import {
  Component,
  Input,
  OnInit
} from '@angular/core';

import * as _ from "lodash";

@Component({
  selector: 'app-single-pokemon',
  templateUrl: './single-pokemon.component.html',
  styleUrls: ['./single-pokemon.component.css']
})
export class SinglePokemonComponent implements OnInit {

  @Input() show = false;
  @Input() pokeInfo = { name: "", url: "", id: 0, skill1: "", skill2: "", type: "", atk: 0, def: 0, speAtk: 0, speDef: 0, hp: 0, pos: 0 };
  pokeTeam: any[] = [];
  count = 0;

  constructor() {}

  addToTeam(pokeInfo) {
    let deepCopy = _.cloneDeep(pokeInfo);
    if (this.count >= 6) {
      alert('El equipo está completo');
    } else {
      this.pokeTeam = JSON.parse(localStorage.getItem("team"))
      this.count++;
      this.pokeTeam.push(deepCopy);
    }
  }

  saveTeam() {
    localStorage.setItem('team', JSON.stringify(this.pokeTeam));
  }

  ngOnInit(): void {
  }

}
