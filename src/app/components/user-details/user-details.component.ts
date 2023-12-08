import {Component, EventEmitter, Output} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {NgForOf, NgIf} from "@angular/common";

import {IPost, IUser} from "../../interfaces";
import {UserService} from "../../services";
import {PostComponent} from "../post/post.component";

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    PostComponent
  ],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {
  user: IUser;
  userPosts: IPost[];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {

    this.activatedRoute.params.subscribe(({userId}) => {
      console.log(userId);
      this.user = this.router.getCurrentNavigation()?.extras.state as IUser;

      if (!this.user) {
        this.userService.getById(userId).subscribe(value => this.user = value);
      }
    })

  }

  getPosts() {
    this.userService.getPostsByUserId(this.user.id).subscribe(value => this.userPosts = value);
  }
}
