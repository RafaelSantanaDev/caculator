import { TestBed } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be 1 + 4 = 5', () => {
    const soma = service.calcular(1, 4, CalculadoraService.SOMA);
    expect(soma).toEqual(5);
  });

  it('should be 5 - 5 = 0', () => {
    const subtracao = service.calcular(5, 5, CalculadoraService.SUBTRACAO);
    expect(subtracao).toEqual(0);
  });

  it('should be 5 / 5 = 1', () => {
    const divisao = service.calcular(5, 5, CalculadoraService.DIVISAO);
    expect(divisao).toEqual(1);
  });

  it('should be 5 * 5 = 25', () => {
    const multiplicacao = service.calcular(5, 5, CalculadoraService.MULTIPLICACAO);
    expect(multiplicacao).toEqual(25);
  });

  it('should be 30 % 60 = 18', () => {
    const porcentagem = service.calcular(30, 60, CalculadoraService.PORCENTAGEM);
    expect(porcentagem).toEqual(18);
  });

  it('should be returning 0 to invalid operation', () => {
    const invalidOperation = service.calcular(5, 5, '!');
    expect(invalidOperation).toEqual(0);
  });
});
