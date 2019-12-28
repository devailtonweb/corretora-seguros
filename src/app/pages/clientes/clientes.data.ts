import { Injectable } from '@angular/core';

import { Clientes } from "./clientes.model";
import { AngularFireDatabase } from '@angular/fire/database';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesData {

  constructor() {

  }

  private clientesSource = new BehaviorSubject({
    clientes: null, key: ''
  })

  clientesAtual = this.clientesSource.asObservable();

  obtemCliente(clientes: Clientes, key: string) {
    this.clientesSource.next({ clientes: clientes, key: key });
  }

}
