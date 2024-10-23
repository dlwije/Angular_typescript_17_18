import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  // from '?' we tell it might not be defined or initialized
  // Instead of '?' sign we can use union type by adding '|' mark as well. EX: string | undefined
  @Input() name?: string;

}
