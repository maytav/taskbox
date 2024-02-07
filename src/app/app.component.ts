import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: ` <app-inbox-screen></app-inbox-screen>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'taskbox';
}
