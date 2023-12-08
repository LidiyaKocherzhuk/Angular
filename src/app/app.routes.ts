// Отримати всіх юзерів з jsonplaceholder
// 2 Вивести id,name всіх юзерів
// 3 Додати кожному юзеру кнопку/посилання , при кліку на яку відбувається перехід на сторінку user-details, котра має детальну інфорацію про об'єкт на який клікнули
//
// На сторінці user-details:
// 4 Вивести детальну інформацію (5 і більше полів) про об'єкт user на який клікнули
// 5 Додати кнопку 'post of current user', при кліку на яку, з'являються title всіх постів поточного юзера
// 6 Кожному посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details, котра має детальну інфу про поточний пост.
//
//   На cторінці post-detail:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Під інформацією про пост, вивести всі коментарі поточного поста
// ---------------------------------------------------------------------------------------------

import {Routes} from '@angular/router';

import {MainLayoutComponent} from './layouts';
import {
  CommentsPageComponent,
  PostDetailsPageComponent,
  PostsPageComponent,
  UserDetailsPageComponent,
  UsersPageComponent
} from './pages';


export const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: 'users', pathMatch: 'full'},
      {path: 'users', component: UsersPageComponent},
      {
        path: 'users/:userId', component: UserDetailsPageComponent, children: [
          {path: 'posts', component: PostsPageComponent}
        ]
      },
      {
        path: 'posts/:postId', component: PostDetailsPageComponent, children: [
          {path: 'comments', component: CommentsPageComponent}
        ]
      },

    ]
  }
];
