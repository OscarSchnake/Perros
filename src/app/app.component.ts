import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'espectacular app';
  //private apiUrl = 'https://address-book-demo.herokuapp.com/api/contacts';
  private apiUrl = 'https://dog.ceo/api/breeds/list';
  data: any = {};

  constructor ( private http: Http) {
      console.log('hola');
      this.getContacts();
      this.getData();
  }

  getData() {
      let dat = this.http.get(this.apiUrl).map((res: Response) => res.json());

      return dat;
  }

  getContacts () {
      this.getData().subscribe( data => {
          console.log(data);
          let lista = data.message;
          console.log(lista);
    //      res : Array <String>;
    /*      for ( let i = 0; i < lista.length; i ++) {
              res.push({nombre: lista[i]});
          }
          console.log(res);
          this.data = data;*/
      })
  }
}
