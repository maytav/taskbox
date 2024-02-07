import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import TaskListComponent from '@app/components/task-list/task-list.component';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-pure-inbox-screen',
  standalone: true,
  imports: [NgIf, TaskListComponent],
  templateUrl: './pure-inbox-screen.component.html',
  styleUrl: './pure-inbox-screen.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PureInboxScreenComponent {
  @Input() error: any;
}
