import {Component, Input} from '@angular/core';

import {ICar} from "../../interfaces";
import {update} from "@angular-devkit/build-angular/src/tools/esbuild/angular/compilation/parallel-worker";
import {CarService} from "../../services";

@Component({
  selector: 'app-car',
  standalone: true,
  imports: [],
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent {
  @Input()
  car: ICar

  updateCar: ICar;

  constructor(private carService: CarService) {
  }

  update() {
    this.carService.setUpdateCar(this.car);
  }

  delete() {
    this.carService.delete(this.car.id).subscribe(value => {
      this.carService.setTrigger();
    });
  }
}
