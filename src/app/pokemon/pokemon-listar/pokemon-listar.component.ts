import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { PokemonDetailDto } from '../pokemonDetailDto';

@Component({
  selector: 'app-pokemon-listar',
  templateUrl: './pokemon-listar.component.html',
  styleUrl: './pokemon-listar.component.css'
})
export class PokemonListarComponent implements OnInit {

  pokemons: Array<PokemonDetailDto> = [];
  selected: boolean = false;
  selectedPokemon!: PokemonDetailDto;

  constructor( private service: PokemonService){};

  getPokemons(): void{
    this.pokemons = this.service.getPokemons();
  }

  onSelected(pokemon: PokemonDetailDto): void {
    this.selected = true;
    this.selectedPokemon = pokemon;
    console.log(this.selectedPokemon)
  }

  ngOnInit(): void {
    this.getPokemons();
}

}
