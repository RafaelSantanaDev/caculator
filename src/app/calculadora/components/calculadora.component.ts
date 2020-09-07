/**
 * Componente responsável por efetuar a comunicação entre
 * a View da calculadora e o serviço CalculadoraService
 * 
 * @author Rafael Santana de Almeida <rafaelsantana.devweb@gmail.com>
 * @since 1.0.0
 */

import { Component, OnInit } from '@angular/core';

import { CalculadoraService } from '../services';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  private numero1: string;
  private numero2: string;
  private resultado: number;
  private operacao: string;
  private calculoPelosOperadores: boolean = false;

  constructor(private calculadoraService: CalculadoraService) { }

  ngOnInit(): void {
    this.limpar();
  }

  /**
   * Inicializa todas as variáveis do componente
   * 
   * @return void
   */
  limpar(): void {
    this.numero1 = '0';
    this.numero2 = null;
    this.resultado = null;
    this.operacao = null;
  }

  /**
   * Adiociona o número informado na view para realizar os cálculos
   * 
   * @param numero string
   * @return void
   */
  adicionarNumero(numero: string): void {
    if (this.operacao === null) {
      this.numero1 = this.concatenarNumero(this.numero1, numero);
    } else {
      this.numero2 = this.concatenarNumero(this.numero2, numero);;
    }
  }

  /**
   * Concatena os números para realizar os calculos
   * Realizada o tratamento de casas decimeais
   * 
   * @param numeroAtual string
   * @param numeroConcatenar string
   * @return string
   */
  concatenarNumero(numeroAtual: string, numeroConcatenar: string): string {
    // Reseta o número atual quando o valor for 0 ou null
    if (numeroAtual === '0' || numeroAtual === null) {
      numeroAtual = '';
    }

    // Normaliza casa decimal caso o nuúmero atual seja vazio
    if (numeroConcatenar === ',' && numeroAtual === '') {
      return numeroAtual = '0,';
    }

    // Se o número digitado for ',' e já houver no número atual, retorna apenas o número atual
    if (numeroConcatenar === ',' && numeroAtual.indexOf(',') > -1) {
      return numeroAtual;
    }

    return numeroAtual + numeroConcatenar;
  }

  /**
   * Executa lógica quando um operador dor selecionado.
   * Caso já possua uma operacao selecionada, executa a 
   * operação anterior, e define a nova operação.
   * 
   * @param operacao 
   * @return void
   */
  definirOperacao(operacao: string): void {
    // Aborta a função caso não haja número informado
    if (this.numero1 === '0' || this.numero1 === '') {
      return;
    }

    // Insere a operação caso ainda não haja uma inserida.
    if (this.operacao === null && !this.calculoPelosOperadores) {
      this.operacao = operacao;
      return;
    }

    if (this.numero2 !== null) {
      this.calcular();
      this.operacao = operacao;
    }

    return;
  }

  /**
   * Executa o cálculo das operações inseridas na calculadora
   * 
   * @return void
   */
  calcular(): void {
    const calculo = this.calculadoraService.calcular(
      parseFloat(this.numero1),
      parseFloat(this.numero2),
      this.operacao
    );

    this.numero1 = calculo.toString();
    this.numero2 = null;
    this.operacao = null;
  }

  /**
   * Retorna o valor a ser exibido na tela da calculadora
   * 
   * @return string
   */
  get display(): string {
    if (this.resultado !== null) {
      return this.resultado.toString();
    }
    
    let display = '';

    if (this.operacao !== null) {
      display += this.operacao;
    }

    if (this.numero2 !== null) {
      display += this.numero2;
    }
    
    return this.numero1 + display;
  }
}
