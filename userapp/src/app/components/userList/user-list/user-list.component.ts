import { Component, inject, signal } from '@angular/core';

import { UserServiceService } from '../../../services/user-service.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {

  private userService = inject(UserServiceService);
  users = signal<any[]>([]);

  constructor() { 
    this.userService.getUsers().subscribe({
      next: data => {
        this.users.set(data);
      },
      error: error => {
        console.error('Error fetching users:', error);
      }
    });
  }

deleteUser(userId: number) {
    this.userService.deleteUser(userId).subscribe({
      next: () => {
        this.users.set(this.users().filter(user => user.id !== userId));
      },
      error: error => {
        console.error('Error deleting user:', error);
      }
    });
  }
}
