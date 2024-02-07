import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {Observable} from 'rxjs';
import PureTaskListComponent from '@app/components/pure-task-list/pure-task-list.component';
import {AsyncPipe} from '@angular/common';
import {Store} from '@ngxs/store';
import {ArchiveTask, PinTask} from "@app/components/task/states/task.stat";

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [PureTaskListComponent, AsyncPipe],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TaskListComponent {
  tasks$?: Observable<any>;
  store = inject(Store);

  constructor(store: Store) {
    this.tasks$ = store.select((state) => state.taskbox.tasks);
  }

  archiveTask(id: string) {
    this.store.dispatch(new ArchiveTask(id));
  }

  pinTask(id: string) {
    this.store.dispatch(new PinTask(id));
  }
}
