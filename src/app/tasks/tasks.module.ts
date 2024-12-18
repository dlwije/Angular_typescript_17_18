import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

import {TasksComponent} from "./tasks.component";
import {TaskComponent} from "./task/task.component";
import {NewTaskComponent} from "./new-task/new-task.component";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [TasksComponent, TaskComponent, NewTaskComponent],
  // We export only below compo because only this component is using app.component
  exports: [TasksComponent],
  // Every module must work its own and if a module needs something must declare or import itself
  imports: [CommonModule, FormsModule, SharedModule]
})

export class TasksModule {}
