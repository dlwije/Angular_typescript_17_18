import {Component, computed, input, Input} from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // Here we had to add variable type as well because this introduced by us. Earlier we were using Angular inbuild functions and attributes.
  // If we need to create components input, properties and custom inputs we use below way.
  // By adding '!' mark we tell that we have set value outside of this file to the variable.
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  @Input() id!: string;

  // We can do the same input creation with signals in below way
  // These are readonly variables only to this component but from app.component we can change
  avatar = input.required<string>();
  name = input.required<string>();

  imagePath = computed(() => {
    return 'assets/users/' + this.avatar();
  })

  /*get imagePath() {
    return 'assets/users/' + this.avatar;
  }*/

  onSelectUser(){}
}
