import { Injectable } from '@angular/core';
import { Response, Headers, Http, HttpModule } from '@angular/http';
import { Observable } from  'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class DogImageService {
    private url:string;

    constructor (private _http: Http){
        this.url = 'https://dog.ceo/api/breed/';
    }

    getTest() {
        return "El servicio funciona :D";
    }

    getUrlImage( raza ) {
        let url_complete = this.url +raza+'/images/random';
        let responseAsObject = this._http.get(url_complete).map((res: Response) => res.json());
        return responseAsObject;
    }
}
