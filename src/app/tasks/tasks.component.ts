import {Component, Input} from '@angular/core';
import {type NewTaskData} from "./task/task.model";
import { TasksService } from "./tasks.service";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  // from '?' we tell it might not be defined or initialized
  // Instead of '?' sign we can use union type by adding '|' mark as well. EX: string | undefined
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  isAddingTask = false;

  // By using below, it will create a separate instance and each won't share the changes we made.
  /*private tasksService = new TasksService();*/
  // So, because of that, we use dependency injection to share the same instance.

  //Private: The property is accessible from inside the class
  //Public: The property is also available from outside the class(e.g., from inside the template)
  // Dependency Injection: We tell Angular which type of value you need and Angular creates it and provides it as an argument.
  constructor(private tasksService: TasksService) { }


  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }

}
