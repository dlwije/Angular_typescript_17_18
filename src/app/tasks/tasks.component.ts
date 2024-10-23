import {Component, Input} from '@angular/core';
import {TaskComponent} from "./task/task.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  // from '?' we tell it might not be defined or initialized
  // Instead of '?' sign we can use union type by adding '|' mark as well. EX: string | undefined
  @Input() name?: string;

}
