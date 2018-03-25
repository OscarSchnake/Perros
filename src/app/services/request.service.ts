import { Injectable } from '@angular/core';
import { Response, Headers, Http, HttpModule } from '@angular/http';
import { Observable } from  'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class RequestService {
    private url:string;

    constructor (private _http: Http){
        this.url = 'https://dog.ceo/api/breeds/list';
        console.log('en constructor');
    }

    getTest() {
        return "El servicio funciona :D";
    }

    getPersons() {
/*        let response = this._http.get(this.url);
        console.log(response);
        let responseAsObject = response.map (res => res.json());
*/

        console.log('en servicio');
        let responseAsObject = this._http.get(this.url).map((res: Response) => res.json());

        return responseAsObject;


/*        let person = new Person("");
        persons : Array <Person>;
        persons = [ new Person ("Oscar"),
                           new Person ("Sergio")];
        return persons;*/
    }
}
