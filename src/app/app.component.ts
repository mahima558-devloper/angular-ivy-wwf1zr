import { Component, VERSION } from '@angular/core';
import { ValueFromArray } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  onSubmit(item: any) {
    console.log('item');
  }
}
