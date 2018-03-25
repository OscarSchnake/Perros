import { Component, OnInit } from '@angular/core';
import {Car} from './car';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  public car: Car;
  public cars: Array<Car>;

  constructor() {
    this.car = new Car("");
    this.cars = [ new Car("quiltro"),
                  new Car("perro feo") ];
   }

  ngOnInit() {
  }

  onSubmit() {
    this.cars.push(this.car);
    this.car = new Car("");
  }

}
