import { Component, EventEmitter, Output } from '@angular/core';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-form-produtos',
  templateUrl: './form-produtos.component.html',
  styleUrl: './form-produtos.component.css'
})
export class FormProdutosComponent {
  produto: any = {id:0, nome:"", preco:0};
  
  constructor(private produtoService: ProdutoService){  
  }
  
  cadastrar() {
    alert(`Produto cadastrado com sucesso!`);
    this.produtoService.inserir(this.produto);
    this.produto = {id:0, nome:"", preco:0};
  }
}
