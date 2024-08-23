import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'; // Adjust path as needed
import { NavbarService } from '../navbar.service'; // Adjust path as needed
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  inputValue: string = '';

  constructor(
    private dataService: DataService,
    private navbarService: NavbarService
  ) {}

  ngOnInit() {
    this.dataService.inputValue$.subscribe(value => this.inputValue = value);
  }

  onButtonClick() {
    this.navbarService.toggleColor('red'); // Toggle between red and the original color
  }

  getCharacters(): string[] {
    return this.inputValue.split('');
  }
}
