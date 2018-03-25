import { Injectable } from '@angular/core';
import { Response, Headers, Http, HttpModule } from '@angular/http';
import { Observable } from  'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class RequestService {
    private url:string;

    constructor (private _http: Http){
        this.url = 'https://dog.ceo/api/breeds/list';
    }

    getTest() {
        return "El servicio funciona :D";
    }

    getPerros() {
        let responseAsObject = this._http.get(this.url).map((res: Response) => res.json());
        return responseAsObject;
    }
}
