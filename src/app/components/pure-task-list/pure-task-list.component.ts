import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import TaskComponent from "../task/task.component";
import {Task} from "@app/models/task.model";

@Component({
  selector: 'app-pure-task-list',
  standalone: true,
  imports: [
    NgIf,
    TaskComponent,
    NgForOf
  ],
  templateUrl: './pure-task-list.component.html',
  styleUrl: './pure-task-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class PureTaskListComponent {
  @Input() tasksInOrder: Task[] = [];
  /** Checks if it's in loading state */
  @Input() loading = false;
  /** Event to change the task to pinned */
    // tslint:disable-next-line: no-output-on-prefix
  @Output()
  onPinTask = new EventEmitter<any>();
  /** Event to change the task to archived */
    // tslint:disable-next-line: no-output-on-prefix
  @Output()
  onArchiveTask = new EventEmitter<any>();

  @Input()
  set tasks(arr: Task[]) {
    const initialTasks = [
      ...arr.filter(t => t.state === 'TASK_PINNED'),
      ...arr.filter(t => t.state !== 'TASK_PINNED'),
    ];
    const filteredTasks = initialTasks.filter(
      t => t.state === 'TASK_INBOX' || t.state === 'TASK_PINNED'
    );
    this.tasksInOrder = filteredTasks.filter(
      t => t.state === 'TASK_INBOX' || t.state === 'TASK_PINNED'
    )
  }
}
