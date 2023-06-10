import { ChangeDetectionStrategy, Component, DoCheck } from '@angular/core';
import { getRandomColor } from 'src/app/color.helper';

@Component({
  selector: 'app-right-first',
  templateUrl: './right-first.component.html',
  styleUrls: ['./right-first.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RightFirstComponent implements DoCheck {
  style!: { 'background-color': any };
  ngDoCheck(): void {
    const color = getRandomColor();
    this.style = { 'background-color': color };
    console.log('Right component 1 do check ', color);
  }
}
