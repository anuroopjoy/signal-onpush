import { ChangeDetectionStrategy, Component, DoCheck } from '@angular/core';
import { getRandomColor } from 'src/app/color.helper';

@Component({
  selector: 'app-right-second',
  templateUrl: './right-second.component.html',
  styleUrls: ['./right-second.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RightSecondComponent implements DoCheck {
  style!: { 'background-color': any };
  ngDoCheck(): void {
    const color = getRandomColor();
    this.style = { 'background-color': color };
    console.log('Right component 2 do check ', color);
  }
}
