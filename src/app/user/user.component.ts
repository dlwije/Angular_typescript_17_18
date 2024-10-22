import {Component} from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // Because of we call to this function we need to add parenthesis when we use it in HTML template
  onSelectUser() {
  }
}
