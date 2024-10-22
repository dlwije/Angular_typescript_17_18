import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // Here we had to add variable type as well because this introduced by us. Earlier we were using Angular inbuild functions and attributes.
  // If we need to create components input we use below way.
  // By adding '!' mark we tell that we have set value outside of this file to the variable.
  @Input() avatar!: string;
  @Input({ required: true }) name!: string;
  @Input() id!: string;

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }

  onSelectUser(){}
}
