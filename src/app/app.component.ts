import { Component, DoCheck } from '@angular/core';
import { getRandomColor } from './color.helper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements DoCheck {
  style: any;
  ngDoCheck(): void {
    const color = getRandomColor();
    this.style = { 'background-color': color };
    console.log('Main container do check ', color);
  }
  title = 'changeDetection';
}
