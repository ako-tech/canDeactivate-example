import { Routes } from '@angular/router';
import usersRoutes from './users/users.routes';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full',
  },
  {
    path: 'users',
    loadChildren: () => usersRoutes,
  },
];
