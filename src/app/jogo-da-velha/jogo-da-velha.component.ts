import { Component, OnInit } from '@angular/core';
import { JogoDaVelhaService } from './shared';

@Component({
  selector: 'app-jogo-da-velha',
  templateUrl: './jogo-da-velha.component.html',
  styleUrls: ['./jogo-da-velha.component.css'],
})
export class JogoDaVelhaComponent implements OnInit {
  constructor(private jogoDaVelhaService: JogoDaVelhaService) {}

  ngOnInit(): void {
    this.jogoDaVelhaService.inicializar();
  }

  /**
   * Retorna se a tela de início deve ser exibida.
   *
   * @returns boolean
   */
  get showInicio(): boolean {
    return this.jogoDaVelhaService.showInicio;
  }

  /**
   * Retorna se o tabuleiro deve ser exibido.
   *
   * @returns boolean
   */
  get showTabuleiro(): boolean {
    return this.jogoDaVelhaService.showTabuleiro;
  }

  /**
   * Retorna se a tela de fim de jogo deve ser exibido.
   *
   * @returns boolean
   */
  get showFinal(): boolean {
    return this.jogoDaVelhaService.showFinal;
  }

  /**
   * Inicializa os dados de um novo jogo.
   *
   * @returns void
   */
  iniciarJogo(): void {
    return this.jogoDaVelhaService.iniciarJogo();
  }
}
