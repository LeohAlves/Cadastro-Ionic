import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { Usuario } from '../models/Usuario.model';
import { UsuarioService } from '../services/usuario.service';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  usuario: Usuario = new Usuario()

  CadForm = this.formBuilder.group({
    nome: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
    email: ['', Validators.compose([Validators.required, Validators.email])],
    cpf: ['', Validators.compose([Validators.required, Validators.maxLength(11), Validators.minLength(11)])],
    senha: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
    confirma: ['', Validators.compose([Validators.required, Validators.minLength(8)])]
  })

  errorMessage =
    {
      nome: [{ tipo: 'required', aviso: 'O campo não pode estar vazio' }, { tipo: 'minlength', aviso: 'É necessário ter no mínimo 3 caracteres.' }],
      email: [{ tipo: 'required', aviso: 'O campo não pode estar vazio' }, { tipo: 'email', aviso: 'Email inválido' }],
      cpf: [{ tipo: 'required', aviso: 'O campo não pode estar vazio' }, { tipo: 'minlength', aviso: 'cpf inválido!' }, { tipo: 'maxlength', aviso: 'CPF inválido!' }],
      senha: [{ tipo: 'required', aviso: 'O campo não pode estar vazio' }, { tipo: 'minlength', aviso: 'É necessário ter no mínimo 8 caracteres.' }],
      confirma: [{ tipo: 'required', aviso: 'O campo não pode estar vazio' }, { tipo: 'minlength', aviso: 'É necessário ter no mínimo 8 caracteres.' }]
    };
  constructor(private formBuilder: FormBuilder, 
    private usuarioService: UsuarioService, 
    private route : Router
    ) { }

  async Salvar() {
    if (this.CadForm.valid) {

      this.usuario.nome = this.CadForm.get('nome').value;
      this.usuario.email = this.CadForm.get('email').value;
      this.usuario.cpf = this.CadForm.get('cpf').value;
      this.usuario.senha = this.CadForm.get('senha').value;

      const id = await this.usuarioService.buscarId() as number;

      this.usuario.id = id;

      this.usuarioService.salvar(this.usuario);

      this.usuarioService.salvarId(id+1);
      alert('Cadastrado com Sucesso !')
      this.route.navigateByUrl('/login')
    } else {
      alert('Formulário inválido!')
    }
  }


  get nome() {
    return this.CadForm.get('nome');
  }
  get email() {
    return this.CadForm.get('email');
  }
  get cpf() {
    return this.CadForm.get('cpf');
  }
  get senha() {
    return this.CadForm.get('senha');
  }
  get confirma() {
    return this.CadForm.get('confirma');
  }
  ngOnInit() {
  }

}
