import { Routes } from '@angular/router';
import { UserEditComponent } from './edit/edit.component';
import { userResolver } from './user.resolver';
import { UsersComponent } from './users.component';

export const usersRoutes: Routes = [
  {
    path: '',
    component: UsersComponent,
    pathMatch: 'full',
  },
  {
    path: ':id',
    component: UserEditComponent,
    resolve: { user: userResolver },
  },
];

export default usersRoutes;
