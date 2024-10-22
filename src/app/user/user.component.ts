import { Component } from '@angular/core';
import { DUMMY_USERS } from "../dummy-users";

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // If we add private infront of this variable it will be available only for the class. Default is Public
  selectedUser = DUMMY_USERS[randomIndex];
}
