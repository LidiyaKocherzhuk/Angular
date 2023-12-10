import {Component, Input} from '@angular/core';

import {ICar} from "../../interfaces";
import {update} from "@angular-devkit/build-angular/src/tools/esbuild/angular/compilation/parallel-worker";

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

  update() {

  }

  delete() {

  }
}
