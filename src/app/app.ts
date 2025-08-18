import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  title = 'Angular practice';
  subtitle = 'My practice';

  isShowInput = true;

  changeTitle() {
    if (this.title === 'Angular practice') {
      this.title = 'Super practice';
    } else {
      this.title = 'Angular practice';
    }
  }
}
