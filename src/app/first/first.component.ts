import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../data.service';


@Component({
  selector: 'app-first',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  inputValue: string = '';

  constructor(private dataService: DataService) {}

  onInputChange() {
    this.dataService.setInputValue(this.inputValue);
  }
}
