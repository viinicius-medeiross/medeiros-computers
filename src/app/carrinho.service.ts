import { Injectable } from '@angular/core';
import { IProdutoCarrinho } from './produtos';
import { isNgTemplate } from '@angular/compiler';

@Injectable({
  providedIn: 'root',
})
export class CarrinhoService {
  itens: IProdutoCarrinho[] = [];

  constructor() {}

  obtemCarrinho() {
    this.itens = JSON.parse(localStorage.getItem("carrinho") || "[]");
    return this.itens;
  }

  adicionarAoCarrinho(produto: IProdutoCarrinho) {
    this.itens.push(produto);
    localStorage.setItem('carrinho', JSON.stringify(this.itens));
  }

  removerProdutoCarrinho(produtoId: number) {
    this.itens = this.itens.filter((item) => item.id !== produtoId);
    localStorage.setItem('carrinho', JSON.stringify(this.itens));
    
  }
  LimparCarrinho() {
    this.itens = [];
    localStorage.clear();
  }
}
