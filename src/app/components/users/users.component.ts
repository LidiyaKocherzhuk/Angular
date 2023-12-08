import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";

import {UserService} from "../../services";
import {IPost, IUser} from "../../interfaces";
import {UserComponent} from "../user/user.component";
import {PostComponent} from "../post/post.component";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    UserComponent,
    NgForOf,
    PostComponent
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})

export class UsersComponent implements OnInit {
  users: IUser[];
  userPosts: IPost[];
  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService
      .getAll()
      .subscribe(value => this.users = value);
  }


  // getPosts(userId: number) {
  //   this.userService
  //     .getPostsByUserId(userId)
  //     .subscribe(value => this.userPosts = value);
  // }
}
