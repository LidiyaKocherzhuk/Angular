import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {NgIf} from "@angular/common";

import {IPost} from "../../interfaces";
import {PostsService} from "../../services";

@Component({
  selector: 'app-post-details',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.css'
})
export class PostDetailsComponent {
  post: IPost;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private postsService: PostsService,
  ) {
    this.activatedRoute.params.subscribe(({postId}) => {
      this.post = this.router.getCurrentNavigation()?.extras.state as IPost;

      if (!this.post) {
        this.postsService.getById(postId).subscribe(value => this.post = value);
      }
    })

  }

  getPostComments() {

  }
}
