import {ChangeDetectionStrategy, Component} from '@angular/core';
import {AsyncPipe} from '@angular/common';
import {Observable} from 'rxjs';
import {Store} from '@ngxs/store';
import PureInboxScreenComponent from '@app/components/pure-inbox-screen/pure-inbox-screen.component';

@Component({
  selector: 'app-inbox-screen',
  standalone: true,
  imports: [PureInboxScreenComponent, AsyncPipe],
  templateUrl: './inbox-screen.component.html',
  styleUrl: './inbox-screen.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class InboxScreenComponent {
  error$: Observable<boolean>;

  constructor(store: Store) {
    this.error$ = store.select((state) => state.taskbox.error);
  }
}
