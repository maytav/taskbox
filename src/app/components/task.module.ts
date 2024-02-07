import PureTaskListComponent from './pure-task-list/pure-task-list.component';
import TaskListComponent from '@app/components/task-list/task-list.component';
import { NgModule } from '@angular/core';
import TaskComponent from '@app/components/task/task.component';
import { NgxsModule } from '@ngxs/store';
import { TasksState } from '@app/components/task/states/task.stat';

@NgModule({
  imports: [
    TaskComponent,
    TaskListComponent,
    PureTaskListComponent,
    NgxsModule.forFeature([TasksState]),
  ],
})
export class TaskModule {}
