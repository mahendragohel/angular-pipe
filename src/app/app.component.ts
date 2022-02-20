import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  sortBy = 'desc';
  items = [{ key: 'aaa' }, { key: 'bbb' }, { key: 'ccc' }, { key: 'ddd' }];
}
