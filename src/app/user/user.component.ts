import {Component, computed, signal} from '@angular/core';
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
  selectedUser = signal(DUMMY_USERS[randomIndex]);

  // When we use signals we dont need to create getters like below 'get imagePath' and directcly we can use computed function for that
  // We use computed because this will be call only either of values inside being called or change only.
  imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);


  // Instead of adding this complex binding html element itself, we can use getters here to make it and get it from there.
  // Because of getter we don't use parenthesis when we call this
  /*get imagePath() {
    return 'assets/users/'+this.selectedUser.avatar;
  }*/

  // Because of we call to this function we need to add parenthesis when we use it in HTML template
  onSelectUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
    // this.selectedUser = DUMMY_USERS[randomIndex];
  }
}
