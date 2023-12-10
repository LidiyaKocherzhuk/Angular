import {Component, OnInit} from '@angular/core';
import {ICar} from "../../interfaces";
import {CarService} from "../../services";
import {CarComponent} from "../car/car.component";
import {NgForOf} from "@angular/common";
import {CarFormComponent} from "../car-form/car-form.component";

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [
    CarComponent,
    NgForOf,
    CarFormComponent
  ],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent implements OnInit {
  cars: ICar[];

  constructor(private carService: CarService) {
  }

  ngOnInit(): void {
    this.carService.getTrigger().subscribe(value => {
      this.carService.getAll().subscribe(value => this.cars = value);
    });
  }


}
