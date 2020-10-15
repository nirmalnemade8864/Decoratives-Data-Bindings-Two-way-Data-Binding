import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo50';
  newPost = 'NO CONTENT';
  enteredValue = '';
  onAddPost() {
    this.newPost = this.enteredValue;
  }
}
