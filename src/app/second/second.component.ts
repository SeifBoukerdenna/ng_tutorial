import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-second',
  standalone: true,
  imports: [],
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  inputValue: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.inputValue$.subscribe(value => this.inputValue = value);
  }
}
