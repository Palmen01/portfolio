import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { Router } from "@angular/router";
import { HeroComponent } from './hero/hero.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SkilltreeComponent } from './skilltree/skilltree.component';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, HeroComponent, CarouselComponent, SkilltreeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}