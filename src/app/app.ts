import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  title = 'angular-practice';
  subtitle = 'my-practice';

  changeTitle() {
    this.title = 'Super practice';
  }
}
