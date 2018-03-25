import { Component, OnInit } from '@angular/core';
import { Perro } from './perro';
import { RequestService } from '../services/request.service';
import { DogImageService } from '../services/dogimage.service';
import { Response, Headers, Http, HttpModule } from '@angular/http';

@Component({
  selector: 'app-perro',
  templateUrl: './perro.component.html',
  styleUrls: ['./perro.component.css'],
  providers: [RequestService, DogImageService]
})
export class PerroComponent implements OnInit {
  public perro: Perro;
  public perros: Array<Perro>;
  public img_selected: String;
  public dogImageService : DogImageService;

  constructor(private _request: RequestService, private _dogImage: DogImageService) {
    this.img_selected = "https://dog.ceo/api/img/airedale/n02096051_4860.jpg";
    this.dogImageService = _dogImage;
  }

  ngOnInit() {
    this._request.getPerros().subscribe(
      result => {
        this.perros = [];
        let lista = result.message;

        for (var valor of lista) {
          this.perros.push({ "raza": valor });
        }
      },
      error => {
        var errorMessage = <any> error;
      }
    );

  }

  onSelect(perro: Perro): void {
    console.log(perro.raza);
    this.img_selected = perro.raza;
    console.log(perro.raza);
    this._dogImage.getUrlImage(perro.raza).subscribe(
      result => {
        console.log('aca en OnSelect');
        this.img_selected = result.message;
        console.log(result.message);
      },
      error => {
        console.log('error');
      }
    );
  }

}
