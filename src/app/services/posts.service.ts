import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IComment, IPost} from "../interfaces";
import {urls} from "../constants";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private httpClient: HttpClient) {
  }

  getById(id: number): Observable<IPost> {
    return this.httpClient.get<IPost>(urls.posts.byId(id))
  }

  getCommentsByPostId(id: number | string): Observable<IComment[]> {
    return this.httpClient.get<IComment[]>(urls.posts.comments(id));
  }

}
