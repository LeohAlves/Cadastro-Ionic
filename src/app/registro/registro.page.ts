import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms'
import { StorageService } from '../services/storage.service';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  CadForm = this.formBuilder.group({
    nome:  ['', Validators.compose([Validators.required,Validators.minLength(3)])],
    email: ['', Validators.compose([Validators.required, Validators.email])],
    CPF : ['',Validators.compose([Validators.required, Validators.maxLength(11),Validators.minLength(11)])],
    senha: ['',Validators.compose([Validators.required, Validators.minLength(8)])],
    confirma: ['', Validators.compose([Validators.required, Validators.minLength(8)])]
  })

  errorMessage =
  {
    nome :[{tipo: 'required', aviso: 'O campo não pode estar vazio'}, {tipo: 'minlength', aviso: 'É necessário ter no mínimo 3 caracteres.'}],
    email : [{tipo: 'required' , aviso: 'O campo não pode estar vazio'},{ tipo: 'email', aviso: 'Email inválido'}],
    CPF: [{tipo: 'required', aviso: 'O campo não pode estar vazio'}, {tipo: 'minlength', aviso: 'CPF inválido!'}, {tipo: 'maxlength', aviso: 'CPF inválido!'}],
    senha: [{tipo: 'required' , aviso: 'O campo não pode estar vazio'},{ tipo: 'minlength', aviso: 'É necessário ter no mínimo 8 caracteres.'}],
    confirma: [{tipo: 'required', aviso: 'O campo não pode estar vazio'}, {tipo: 'minlength', aviso: 'É necessário ter no mínimo 8 caracteres.'}]
  };
  constructor( private formBuilder: FormBuilder, private bd: StorageService){}

  async Salvar(){
    this.bd.set('email',this.email)
    this.bd.set('nome',this.nome)
    this.bd.set('CPF',this.CPF)
    this.bd.set('Senha',this.senha)
  }

  get nome(){
    return this.CadForm.get('nome');
  }
  get email(){
    return this.CadForm.get('email');
  }
  get CPF(){
    return this.CadForm.get('CPF');
  }
  get senha(){
    return this.CadForm.get('senha');
  }
  get confirma(){
    return this.CadForm.get('confirma');
  }
  ngOnInit() {
  }

}
