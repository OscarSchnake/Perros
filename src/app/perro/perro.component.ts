import { Component, OnInit } from '@angular/core';
import {Perro} from './perro';
import {RequestService} from '../services/request.service';

@Component({
  selector: 'app-perro',
  templateUrl: './perro.component.html',
  styleUrls: ['./perro.component.css'],
  providers: [RequestService]
})
export class PerroComponent implements OnInit {
  public perro : Perro;
  public perros : Array <Perro>;

  constructor( private _request: RequestService) {
//    this.person = new Person("");
//    this.persons = [ new Person ("Oscar"),
//                   new Person ("Sergio")]
   }

  ngOnInit() {
      this._request.getPerros().subscribe(
          result => {
            this.perros = [];
            let lista = result.message;

            for (var valor of lista) {
                    this.perros.push({"raza":valor});
                    }
        },
        error => {
            var errorMessage = <any>error;
        }
    );
  }

  onSubmit() {
    this.perros.push(this.perro);
    this.perro = new Perro("");
  }

}
