import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  private originalColor = 'initialColor';  // Default original color
  private currentColor = this.originalColor;
  private colorSource = new BehaviorSubject<string>(this.originalColor);
  color$ = this.colorSource.asObservable();

  setColor(color: string) {
    this.currentColor = color;
    this.colorSource.next(color);
  }

  toggleColor(newColor: string) {
    if (this.currentColor === this.originalColor) {
      this.setColor(newColor);
    } else {
      this.setColor(this.originalColor);
    }
  }
}
