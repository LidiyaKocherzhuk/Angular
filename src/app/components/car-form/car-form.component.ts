import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {KeyValuePipe, NgForOf, NgIf} from "@angular/common";

import {CarService} from "../../services";
import {ICar} from "../../interfaces";

@Component({
  selector: 'app-car-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgForOf,
    KeyValuePipe,
    NgIf
  ],
  templateUrl: './car-form.component.html',
  styleUrl: './car-form.component.css'
})
export class CarFormComponent implements OnInit {
  form: FormGroup;
  updateCar: ICar;


  constructor(private fb: FormBuilder, private carService: CarService) {
  }

  ngOnInit(): void {
    this._formInit();
    this.carService.getUpdateCar().subscribe(value => {
      this.updateCar = value;

      if (value) {
        const {brand, price, year} = value;
        this.form.patchValue({brand, price, year});
      }
    });
  }

  _formInit(): void {
    this.form = this.fb.group({
      brand: ['', [
        Validators.required,
        Validators.pattern(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/)
      ]],
      price: ['', [
        Validators.required,
        Validators.pattern(/^\d*$/),
        Validators.min(0),
        Validators.max(1_000_000)
      ]],
      year: ['', [
        Validators.required,
        Validators.pattern(/^\d*$/),
        Validators.min(1990),
        Validators.max(new Date().getFullYear())
      ]]
    })
  }


  create() {
    this.carService.create(this.form.value).subscribe(value => {
      this.carService.setTrigger();
    });
  }

  update(): void {
    this.carService.update(this.updateCar.id, this.form.value).subscribe(value => {
      console.log(value);
      this.carService.setTrigger();
      this.carService.setUpdateCar(null);
      this.form.reset();
    });
  }
}
