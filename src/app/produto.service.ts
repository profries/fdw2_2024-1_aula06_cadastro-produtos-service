import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  listaProdutos: any[] = [
    { id: 1, nome:"Produto 1", preco: 100},
    { id: 2, nome:"Produto 2", preco: 200},
    { id: 3, nome:"Produto 3", preco: 300},
    { id: 4, nome:"Produto 4", preco: 400},
    { id: 5, nome:"Produto 5", preco: 500},
  ];

  constructor() { }

  listar(): any[] {
    return this.listaProdutos;
  }
  
  inserir(produto: any) {
    this.listaProdutos.push(produto);
  }
}
