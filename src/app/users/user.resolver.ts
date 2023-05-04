import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { first } from 'rxjs';
import { User } from './users.data';
import { UsersService } from './users.service';

export const userResolver: ResolveFn<User | null> = (
  route: ActivatedRouteSnapshot
) => inject(UsersService).getById(Number(route.params['id']!)).pipe(first());
