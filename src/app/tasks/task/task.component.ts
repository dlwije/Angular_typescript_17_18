import {Component, Input} from '@angular/core';

// It is optional to add 'type' keyword in front of interface name we imported here
import { type Task } from "./task.model";

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
}
