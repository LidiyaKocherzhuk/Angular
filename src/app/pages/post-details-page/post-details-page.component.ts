import { Component } from '@angular/core';

import {UserDetailsComponent} from "../../components/user-details/user-details.component";
import {PostDetailsComponent} from "../../components/post-details/post-details.component";

@Component({
  selector: 'app-post-details-page',
  standalone: true,
  imports: [
    UserDetailsComponent,
    PostDetailsComponent
  ],
  templateUrl: './post-details-page.component.html',
  styleUrl: './post-details-page.component.css'
})
export class PostDetailsPageComponent {

}
