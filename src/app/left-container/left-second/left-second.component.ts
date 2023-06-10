import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DoCheck,
  OnInit,
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
  constructor(
    private cdr: ChangeDetectorRef,
    private dataService: DataService
  ) {}
  ngOnInit(): void {
    setTimeout(() => {
      this.name = 'inside timer';
      this.cdr.detectChanges();
    }, 2000);
    this.dataService.dataSource.subscribe((data) => {
      this.name = data;
      this.cdr.detectChanges();
    });
  }
  public name!: string;
  style!: { 'background-color': any };
  ngDoCheck(): void {
    const color = getRandomColor();
    this.style = { 'background-color': color };
    console.log('Left component 2 do check ', color);
  }
  clickButton() {
    this.name = 'hello';
  }
}
