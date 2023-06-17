import { ChangeDetectionStrategy, Component, DoCheck } from '@angular/core';
import { getRandomColor } from 'src/app/color.helper';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-left-first',
  templateUrl: './left-first.component.html',
  styleUrls: ['./left-first.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeftFirstComponent implements DoCheck {
  constructor(private dataService: DataService) {}
  name = this.dataService.name;
  style!: { 'background-color': any };
  ngDoCheck(): void {
    const color = getRandomColor();
    this.style = { 'background-color': color };
    console.log('Left component 1 do check ', color);
  }
}
