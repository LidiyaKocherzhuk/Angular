import { Component } from '@angular/core';
import {CarsComponent} from "../../components/cars/cars.component";

@Component({
  selector: 'app-cars-page',
  standalone: true,
  imports: [
    CarsComponent
  ],
  templateUrl: './cars-page.component.html',
  styleUrl: './cars-page.component.css'
})
export class CarsPageComponent {

}
