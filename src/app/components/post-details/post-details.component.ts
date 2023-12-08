import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {NgForOf, NgIf} from "@angular/common";

import {IComment, IPost} from "../../interfaces";
import {PostsService} from "../../services";
import {CommentComponent} from "../comment/comment.component";

@Component({
  selector: 'app-post-details',
  standalone: true,
  imports: [
    NgIf,
    CommentComponent,
    NgForOf
  ],
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.css'
})
export class PostDetailsComponent {
  post: IPost;
  comments: IComment[];

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
    this.postsService
      .getCommentsByPostId(this.post.id)
      .subscribe(value => this.comments = value);
  }
}
