import {Component, EventEmitter, Input, Output} from '@angular/core';

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
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;
  @Input({ required: true }) id!: string;

  // Unlike input property output property will receive a default value.
  // This EventEmitter will allow us to Emit custom values to any parent components through this select property.
  @Output() select = new EventEmitter<string>();


  get imagePath() {
    return 'assets/users/' + this.avatar;
  }

  onSelectUser(){
    // We can use this value in parent components by calling to '$event' special variable
    this.select.emit(this.id);
  }
}
