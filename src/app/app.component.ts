import { Component } from '@angular/core';

import { DUMMY_USERS } from "./dummy-users";

@Component({
  selector: 'app-root',
  // We had to remove below one for module based one
  // standalone: true,
  // imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent, TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserID?: string;

  get selectedUser() {
    // Here I added '!' because this could return undefined so it is giving the type error app.component.html

    return this.users.find(user => user.id === this.selectedUserID);
  }

  onSelectUser(id: string) {
    this.selectedUserID = id;
  }
}
