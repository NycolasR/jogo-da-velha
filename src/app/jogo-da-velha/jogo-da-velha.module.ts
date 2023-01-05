import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JogoDaVelhaComponent } from './jogo-da-velha.component';

@NgModule({
  declarations: [
    JogoDaVelhaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    JogoDaVelhaComponent // export deve ser feito para renderização do componente, já que não há roteamento
  ]
})
export class JogoDaVelhaModule { }
