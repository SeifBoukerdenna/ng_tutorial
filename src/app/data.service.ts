import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'  // Ensure it's provided in the root
})
export class DataService {
  private inputValueSource = new BehaviorSubject<string>('');
  inputValue$ = this.inputValueSource.asObservable();

  setInputValue(value: string) {
    this.inputValueSource.next(value);
  }
}
