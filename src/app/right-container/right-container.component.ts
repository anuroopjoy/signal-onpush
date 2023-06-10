import { ChangeDetectionStrategy, Component, DoCheck } from '@angular/core';
import { getRandomColor } from '../color.helper';

@Component({
  selector: 'app-right-container',
  templateUrl: './right-container.component.html',
  styleUrls: ['./right-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RightContainerComponent implements DoCheck {
  style!: { 'background-color': any };
  ngDoCheck(): void {
    const color = getRandomColor();
    this.style = { 'background-color': color };
    console.log('Right container do check ', color);
  }
}
