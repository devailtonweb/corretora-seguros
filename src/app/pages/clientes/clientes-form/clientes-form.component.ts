import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { ClientesService } from '../clientes.service';
import { Clientes } from "../clientes.model";
import { ClientesData } from '../clientes.data';

@Component({
  selector: 'cs-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {

  clientes: Clientes;
  key: string = '';

  constructor(
    private _clientesService: ClientesService,
    private _clientesDataService: ClientesData
  ) { }

  ngOnInit() {
    this.clientes = new Clientes();
    this._clientesDataService.clientesAtual.subscribe(data => {
      if (data.clientes && data.key) {
        this.clientes = new Clientes();
        this.clientes.nome = data.clientes.nome;
        this.clientes.observacao = data.clientes.observacao;
        this.key = data.key;
      }
    }
    );
  }

  onSubmit() {

    if (this.key) {
      this._clientesService.update(this.clientes, this.key);
    } else {
      this._clientesService.insert(this.clientes);
    }

    this.clientes = new Clientes();
    this.key = null;

  }

  protected creationPageTitle(): string {
    return "Cadastro de cliente";
  }

  protected editionPageTitle(): string {
    //const clienteName = this.resource.name || "";
    return "Editar cliente: ";// + categoryName;
  }

}
