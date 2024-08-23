import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavbarService } from './navbar.service'; // Adjust the path as needed

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'routing-app';
  navbarColor: string = 'initialColor'; // Default color

  constructor(private navbarService: NavbarService) {}

  ngOnInit() {
    this.navbarService.color$.subscribe(color => this.navbarColor = color);
  }
}
