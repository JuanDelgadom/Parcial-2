import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { PokemonDetailDto } from '../pokemonDetailDto';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-detalle',
  templateUrl: './pokemon-detalle.component.html',
  styleUrl: './pokemon-detalle.component.css'
})
export class PokemonDetalleComponent implements OnInit {

  pokemonId!: String;
  @Input() pokemonDetail!: PokemonDetailDto;
  pokemonType!: String;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ){
    
  }

  ngOnInit() {
    if(this.pokemonDetail === undefined){
      this.pokemonId = this.route.snapshot.paramMap.get('id')!
      if(this.pokemonId){
        this.getPokemon();
      }
    }
  }

  getPokemon(){
    this.pokemonService.getPokemon(this.pokemonId.trim()).subscribe(apiData => {
      this.pokemonDetail = apiData;
      this.pokemonType = this.pokemonDetail.types[1].type.name;
    })
  }

}
