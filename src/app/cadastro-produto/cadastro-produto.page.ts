import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms'

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.page.html',
  styleUrls: ['./cadastro-produto.page.scss'],
})
export class CadastroProdutoPage implements OnInit {

  constructor( private formBuilder:FormBuilder) { }

  CadFormProd = this.formBuilder.group({
    nome: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
    decricao: ['', Validators.compose([Validators.required, Validators.maxLength(300)])],
    Preco: ['', Validators.required,],
    validade: ['', Validators.compose([Validators.required, Validators.minLength(10)])],
  })

  ngOnInit() {
  }

}
