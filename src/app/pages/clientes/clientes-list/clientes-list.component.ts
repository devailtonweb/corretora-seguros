import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../clientes.service';
import { ClientesData } from '../clientes.data';
import { Observable } from 'rxjs';
import { Clientes } from '../clientes.model';

@Component({
  selector: 'cs-clientes-list',
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes-list.component.css']
})
export class ClientesListComponent implements OnInit {

  clientes: Observable<any>;

  constructor(
    private _clientesService: ClientesService,
    private _clientesData: ClientesData
  ) { }

  ngOnInit() {
    this.clientes = this._clientesService.getAll();
  }

  delete(key: string) {
    this._clientesService.delete(key);
  }

  edit( clientes: Clientes, key: string) {
    this._clientesData.obtemCliente(clientes, key);
  }

}
