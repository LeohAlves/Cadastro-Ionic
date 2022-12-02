import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from '../models/Produto.model';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page   {
  listaProdutos: Produto[] = [];
  constructor(private produtoService: ProdutoService, private route: Router ) {}

  async buscarProdutos()
  {
    this.listaProdutos =  await this.produtoService.buscarTodos();
  }

  ionViewWillEnter(){
    this.buscarProdutos();
  }

  Voltar(){
    this.route.navigateByUrl('/cadastro-produto')
  }
}
