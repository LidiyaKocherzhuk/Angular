import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";

import {IPost} from "../../interfaces";

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  @Input()
  post: IPost;

  constructor(private router: Router) {
  }

  toDetails() {
    this.router.navigate(['/posts', this.post.id], {
      state: this.post
    })
  }
}
