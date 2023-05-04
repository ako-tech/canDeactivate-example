import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, of, tap } from 'rxjs';
import { User, Users, users } from './users.data';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private users$ = new BehaviorSubject<Users>(users);

  constructor() {}

  getAll(): Observable<Users> {
    return this.users$
      .asObservable()
      .pipe(map((users) => [...users].sort((a, b) => a.id - b.id)));
  }

  getById(id: number): Observable<User | null> {
    return this.users$.pipe(
      map((users) => users.find((user) => user.id === id) ?? null)
    );
  }

  save(userToSave: User): Observable<User> {
    return of(userToSave).pipe(
      tap(() => {
        const nextState = [
          ...this.users$.value.filter((user) => user.id !== userToSave.id),
          userToSave,
        ];
        this.users$.next(nextState);
      })
    );
  }
}
