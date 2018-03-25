import { Component, OnInit } from '@angular/core';
import {Person} from './person';
import {RequestService} from '../services/request.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
  providers: [RequestService]
})
export class PersonComponent implements OnInit {
  public person : Person;
  public persons : Array <Person>;

  constructor( private _request: RequestService) {
//    this.person = new Person("");
//    this.persons = [ new Person ("Oscar"),
//                   new Person ("Sergio")]
   }

  ngOnInit() {
    console.log('en ngOnInit');
      this._request.getPersons().subscribe(
          result => {
            this.persons = [];
            let lista = result.message;

            for (var valor of lista) {
                    this.persons.push({"raza":valor});
                    }
        },
        error => {
            var errorMessage = <any>error;
            console.log(errorMessage);
        }
    );
  }

  onSubmit() {
    this.persons.push(this.person);
    this.person = new Person("");
  }

}
