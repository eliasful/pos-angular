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
    if (dados.id) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].id === dados.id) {
          array[i] = dados;
          break;
        }
      }
    } else {
      const last = array[array.length - 1] || {id: 0};
      dados.id = last.id + 1;
      array.push(dados);
    }
    return this.setDados(array);
  }
  
  getById(id: number) {
    // return this.getDados().find(dados => dados.id === id);
    return this.getDados().find(function (dados) {
      return dados.id === id;
    })
  }


  delete(id: number) {
    let dados = this.getDados();
    for (var i = 0; i < dados.length; i++) {
      var dado = dados[i];
      if (dado.id === id) {
        dados.splice(i, 1);
        break;
      }
    }
    this.setDados(dados);
  }
}
