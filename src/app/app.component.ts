import { Component,OnInit } from '@angular/core';
 import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [CommonModule],
  templateUrl:'./app.component.html',
  styles: [],
})
export class AppComponent implements OnInit{
  pokemonsList:Pokemon[] =POKEMONS;
  pokemonSelected: Pokemon|undefined;

  ngOnInit() {
   // console.table(this.pokemonsList[0]);
  }

  selectPokement(pokemonId:string){

    const pokemon : Pokemon|undefined = this.pokemonsList.find(pokemon => pokemon.id== +pokemonId)
    if(pokemon){
      console.log(`vous avez demander ${pokemon.name}`)
      this.pokemonSelected=pokemon;
    }else{
       console.log('vous avez demander un pokemon qui n existe pas')
       this.pokemonSelected=pokemon;
      }

  }
  
}
