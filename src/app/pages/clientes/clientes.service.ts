import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";
import { Clientes } from "./clientes.model";

import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {


  constructor( private _angularFireDatabase: AngularFireDatabase ) {
  
  }


  insert( clientes: Clientes ) {
    this._angularFireDatabase.list("clientes").push(clientes)
      .then((result: any) => {
        console.log(result.key);
      })
  }

  update(clientes: Clientes, key: string) {
    this._angularFireDatabase.list("clientes").update(key, clientes);
  }

  delete(key: string) {
    this._angularFireDatabase.object(`clientes/${key}`).remove();
  }

  getAll() {
    return this._angularFireDatabase.list("clientes")
      .snapshotChanges()
      .pipe(
        map( changes => {
          return changes.map(data => ({
              key: data.payload.key,
              ...data.payload.val()
            })
          )
        })
      )

  }

}
