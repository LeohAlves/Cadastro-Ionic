import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  ///a variavel _storage e responsavel por armazenar os dados/informacoes 
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    /* a funçao entra dentro do storage e pede para criar o banco de dados nele, guardando na variavel local storage e enviando para a 
       variavel global */
    const storage = await this.storage.create();
    this._storage = storage;
  }

  // variavel feita para gravar informaçoes no banco de dados
  public  async set(key: string, value: any) {
    await this._storage?.set(key, value);
  }
  // variavel feita para pegar  informaçoes gravadas no banco de dados
  public async  get(key: string){
     return await this._storage?.get(key)
  }

  public async delete(key: string){
     await this._storage.remove(key);
  }
}
