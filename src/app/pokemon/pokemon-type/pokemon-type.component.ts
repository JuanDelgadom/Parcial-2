import { Component } from '@angular/core';
import { PokemonDetailDto } from '../pokemonDetailDto';
import { PokemonService } from '../pokemon.service';
import { TypesDto } from '../../type/typeDto';

@Component({
  selector: 'app-pokemon-type',
  templateUrl: './pokemon-type.component.html',
  styleUrl: './pokemon-type.component.css'
})
export class PokemonTypeComponent {

  pokemons: Array<PokemonDetailDto> = [];
  type!: string;

  constructor( private service: PokemonService){};

  getPokemons(): void{
    this.pokemons = this.service.getPokemons();
    if(this.type){
      const filteredPokemons = this.pokemons.filter(pokemon => 
        pokemon.types.some((typeDto: TypesDto) => typeDto.type.name === this.type)
      );
      
      this.pokemons = filteredPokemons;
    }
    
  }
  ngOnInit(): void {
    this.getPokemons();
  } 

}
