import { SlicePipe } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { User } from '../users.data';
import { UsersService } from '../users.service';

type EditUserForm = FormGroup<{
  name: FormControl<string>;
  email: FormControl<string>;
}>;

@Component({
  selector: 'ako-edit',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, SlicePipe],
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class UserEditComponent {
  originalUser: User;
  editForm!: EditUserForm;

  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService,
    private fb: NonNullableFormBuilder,
    private router: Router
  ) {
    const user = this.route.snapshot.data['user'];

    if (!user) {
      this.router.navigateByUrl('/users');
    }

    this.originalUser = user;
    this.initForm(user);
  }

  private initForm({ name, email }: User): void {
    this.editForm = this.fb.group({
      name: [name, Validators.required],
      email: [email, [Validators.email, Validators.required]],
    });
  }

  onSave(): void {
    const updatedUser: User = {
      ...this.originalUser,
      ...this.editForm.getRawValue(),
    };

    this.usersService
      .save(updatedUser)
      .subscribe(() => this.editForm.reset(updatedUser));
  }
}
