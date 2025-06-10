import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Output() scrollTo = new EventEmitter<string>();

  toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    
    menu?.classList.toggle("open");
    icon?.classList.toggle("open");
  }

  onNavigate(section: string) {
    this.scrollTo.emit(section);
    this.toggleMenu();
  }
}