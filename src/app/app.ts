import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  title = 'Angular practice';
  subtitle = 'my practice';

  changeTitle() {
    if (this.title === 'Angular practice') {
      this.title = 'Super practice';
    } else {
      this.title = 'Angular practice';
    }
  }
}
