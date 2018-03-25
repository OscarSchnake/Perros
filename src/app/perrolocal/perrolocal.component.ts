import { Component, OnInit } from '@angular/core';
import {PerroLocal} from './perrolocal';

@Component({
  selector: 'app-perrolocal',
  templateUrl: './perrolocal.component.html',
  styleUrls: ['./perrolocal.component.css']
})
export class PerroLocalComponent implements OnInit {
  public perrolocal: PerroLocal;
  public perroslocales: Array <PerroLocal>;

  constructor() {
    this.perrolocal = new PerroLocal("");
    this. perroslocales = [ new PerroLocal("quiltro"),
                            new PerroLocal("ladrador")];
   }

  ngOnInit() {
  }


}
