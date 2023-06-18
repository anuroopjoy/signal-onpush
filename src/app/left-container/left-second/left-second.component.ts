import {
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  OnInit,
  effect,
  signal,
} from '@angular/core';
import { getRandomColor } from 'src/app/color.helper';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-left-second',
  templateUrl: './left-second.component.html',
  styleUrls: ['./left-second.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeftSecondComponent implements DoCheck, OnInit {
  constructor(private dataService: DataService) {
    effect(
      () => {
        this.name.set(this.dataService.name());
      },
      { allowSignalWrites: true }
    );
  }
  ngOnInit(): void {
    setTimeout(() => {
      this.name.set('inside timer');
    }, 5000);
  }
  public name = signal('');
  style!: { 'background-color': any };
  ngDoCheck(): void {
    const color = getRandomColor();
    this.style = { 'background-color': color };
    console.log('Left component 2 do check ', color);
  }
  clickButton() {
    this.name.set('hello');
  }
}
