import {Component, EventEmitter, Input, Output} from '@angular/core';

import {IUser} from "../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input()
  user: IUser;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  toDetails() {
    this.router.navigate([this.user.id], {
      relativeTo: this.activatedRoute,
      state: this.user
    });
  }
}
