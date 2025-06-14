import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { Router } from "@angular/router";
import { HeroComponent } from './hero/hero.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SkilltreeComponent } from './skilltree/skilltree.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ExperienceComponent } from './experience/experience.component';
import { FooterComponent } from './footer/footer.component';



@Component({
  selector: 'app-root',
  imports: [NavbarComponent, HeroComponent, CarouselComponent, SkilltreeComponent, AboutMeComponent, ExperienceComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}