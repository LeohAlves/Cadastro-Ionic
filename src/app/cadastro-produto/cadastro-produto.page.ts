import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { Produto } from '../models/Produto.model';
import { ProdutoService } from '../services/produto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.page.html',
  styleUrls: ['./cadastro-produto.page.scss'],
})
export class CadastroProdutoPage implements OnInit {

  produto: Produto = new Produto()

  CadFormProd = this.formBuilder.group({
    nome: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
    descricao: ['', Validators.compose([Validators.required, Validators.maxLength(300)])],
    preco: ['', Validators.compose([Validators.required])],
    validade: ['', Validators.compose([Validators.required])]
  })

  errorMessage = 
  {
    produto: [{ tipo:'required', aviso: 'O campo é obrigatório'}, { tipo:'minlength', aviso:'É preciso ter no mínimo 2 caracteres'}],
    descricao: [{ tipo:'required', aviso: 'O campo é obrigatório'}, { tipo:'maxlength', aviso:'É preciso ter no máximo 300 caracteres'}],
    preco: [{ tipo:'required', aviso: 'O campo é obrigatório'}],
    validade: [{ tipo:'required', aviso: 'O campo é obrigatório'}]
  };


  constructor(
    private formBuilder: FormBuilder,
    private produtoService: ProdutoService,
    private route : Router) { }

  async Salvar() {
    if (this.CadFormProd.valid) {

      this.produto.nome = this.CadFormProd.get('nome').value;
      this.produto.descricao = this.CadFormProd.get('descricao').value;
      this.produto.preco = this.CadFormProd.get('preco').value;
      this.produto.validade = this.CadFormProd.get('validade').value;

      const id = await this.produtoService.buscarId() as number;

      this.produto.id = id;

      this.produtoService.salvar(this.produto);

      this.produtoService.salvarId(id+1);
      alert('Registrado com Sucesso!')
    } else {
      alert('Formulário inválido!')
    }
  }
  Exibir(){
    this.route.navigateByUrl('/tabs/tab2')
  }

  ngOnInit() {
  }
  get nome() {
    return this.CadFormProd.get('produto');
  }

  get descricao() {
    return this.CadFormProd.get('descricao');
  }

  get preco() {
    return this.CadFormProd.get('preco');
  }

  get validade() {
    return this.CadFormProd.get('validade');
  }
}
