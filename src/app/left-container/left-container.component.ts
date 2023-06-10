import { ChangeDetectionStrategy, Component, DoCheck } from '@angular/core';
import { getRandomColor } from '../color.helper';

@Component({
  selector: 'app-left-container',
  templateUrl: './left-container.component.html',
  styleUrls: ['./left-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeftContainerComponent implements DoCheck {
  style!: { 'background-color': any };
  ngDoCheck(): void {
    const color = getRandomColor();
    this.style = { 'background-color': color };
    console.log('Left container do check ', color);
  }
}
