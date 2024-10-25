import {Component, EventEmitter, Input, Output} from '@angular/core';

// It is optional to add 'type' keyword in front of interface name we imported here
import { type Task } from "./task.model";
import {CardComponent} from "../../shared/card/card.component";

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [
    CardComponent
  ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  @Output() complete = new EventEmitter<string>();

  onCompleteTask(){
    this.complete.emit(this.task.id);
  }
}
