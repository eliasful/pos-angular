import { Injectable } from '@angular/core';
import { Dados } from '../crud/dados';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor() { }
  
  private setDados(dados any[]) {
    localStorage.setItem('dados', JSON.stringify(dados));
  }
  
  public getDados(): any[] {
    if (!localStorage.getItem('dados'))
      localStorage.setItem('dados', JSON.stringify([]));
      
    return JSON.parse(localStorage.getItem('dados'));
  }
  
  public salvar(dados: Dados) {
    const array = this.getDados();
    const last = array[array.length - 1] || {id: 0};
    dados.id = last.id + 1;
    array.push(dados);
    return this.setDados(array);
  }
}
