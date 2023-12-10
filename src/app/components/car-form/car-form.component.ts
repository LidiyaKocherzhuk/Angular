import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

import {CarService} from "../../services";

@Component({
  selector: 'app-car-form',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './car-form.component.html',
  styleUrl: './car-form.component.css'
})
export class CarFormComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private carService: CarService) {
  }

  ngOnInit(): void {
    this._formInit();
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
    console.log(this.form.controls['brand'].errors);
  }
}
