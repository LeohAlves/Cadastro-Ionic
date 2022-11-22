import { Component } from '@angular/core';
import { Usuario } from '../models/Usuario.model';
import { StorageService } from '../services/storage.service';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  usuarios: [''];
  constructor(private usuarioService: UsuarioService ,private storageService: StorageService) {}

  listarUsuarios()
  {
    this.usuarios
  }

}
