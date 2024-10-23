import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from "./header/header.component";
import {UserComponent} from "./user/user.component";
import { DUMMY_USERS } from "./dummy-users";
import {TasksComponent} from "./tasks/tasks.component";
import {TaskComponent} from "./tasks/task/task.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent, TaskComponent],
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
