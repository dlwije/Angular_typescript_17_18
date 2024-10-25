import {Component, Input, Inject} from '@angular/core';

// It is optional to add 'type' keyword in front of interface name we imported here
import { type Task } from "./task.model";
import {CardComponent} from "../../shared/card/card.component";
import {DatePipe} from "@angular/common";
import {TasksService} from "../tasks.service";

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [
    CardComponent,
    DatePipe
  ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  constructor(private tasksService: TasksService) { }

  onCompleteTask(){
    // console.log(this.task);
    this.tasksService.finishTask(this.task.id);
  }
}
