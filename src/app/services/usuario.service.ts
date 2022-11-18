import { Injectable } from '@angular/core';
import { Usuario } from '../models/Usuario.model';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  listaUsuario: Usuario[] = [];
  //declarar serviço storage no construtor
  constructor(private storageService: StorageService) { }

  async salvar(usuario: Usuario) {
    // primeiro precisa colocar o usuario na lista para depois salvar a lista
    this.listaUsuario[usuario.id] = usuario;
    await this.storageService.set('usuarios', this.listaUsuario)
  }

  async buscarUm() { }
  
  // as unknown as usuario = retornar NADA ou uma LISTA DE USUARIOS
  async buscarTodos() { 
    this.listaUsuario = await this.storageService.get('usuarios') as unknown as Usuario[];
    if(!this.listaUsuario){
      return [];
    }
    return this.listaUsuario;
  }

  async deletar() {
    await this.storageService.delete('idUsuario');
  }

  async salvarId(id: number) {
    // responsavel por salvar um ID
    await this.storageService.set('idUsuario', id);
  }

  async buscarId() {
    // vai buscar um ID, necessário de RETURN, usar metodo GET do storage
    const id = await this.storageService.get('idUsuario')
    if (!id) {
      return 0; 
    }
    return id;
  }

}
