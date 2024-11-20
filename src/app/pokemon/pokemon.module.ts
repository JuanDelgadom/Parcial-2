import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListarComponent } from './pokemon-listar/pokemon-listar.component';
import { PokemonDetalleComponent } from './pokemon-detalle/pokemon-detalle.component';
import { PokemonTypeComponent } from './pokemon-type/pokemon-type.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PokemonListarComponent, PokemonListarComponent, PokemonDetalleComponent, PokemonTypeComponent
  ],
  exports:[PokemonListarComponent]
})
export class PokemonModule { }
