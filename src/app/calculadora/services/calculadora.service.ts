/**
 * Serviço responsável por executar as operações da calculadora.
 * 
 * @author Rafael Santana de Almeida<rafaelsantana.devweb@gmail.com>
 * @since 1.0.0
 */

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {
  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly DIVISAO: string = '/';
  static readonly MULTIPLICACAO: string = '*';
  static readonly PORCENTAGEM: string = '%';

  constructor() { }

  /**
   * Método que efetua uma operação matemática entre dois números.
   * Suporta as operações de: 
   *    Soma, 
   *    Subtração,
   *    Divisão, 
   *    Multiplicação, 
   *    Porcentagem
   * 
   * @param num1 number
   * @param num2 number
   * @param operacao string Operação a ser realizada              
   * @return number Resultado da operação
   */
  calcular(num1: number, num2: number, operacao: string): number {
    let resultado: number;

    switch (operacao) {
      case CalculadoraService.SOMA:
        resultado = num1 + num2;
        break;

      case CalculadoraService.SUBTRACAO:
        resultado = num1 - num2;
        break;

      case CalculadoraService.DIVISAO:
        resultado = num1 / num2;
        break;

      case CalculadoraService.MULTIPLICACAO:
        resultado = num1 * num2;
        break;
      
      case CalculadoraService.PORCENTAGEM:
        resultado = (num1 * num2) / 100;
        break;

      default:
        resultado = 0;
    }

    return resultado;
  }
}
