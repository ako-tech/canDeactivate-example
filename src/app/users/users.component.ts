import { AsyncPipe, NgFor, NgIf, SlicePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { Users } from './users.data';
import { UsersService } from './users.service';

@Component({
  selector: 'ako-users',
  standalone: true,
  imports: [RouterLink, NgIf, NgFor, AsyncPipe, SlicePipe],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent {
  users$: Observable<Users> = this.usersService.getAll();

  constructor(private usersService: UsersService) {}
}
