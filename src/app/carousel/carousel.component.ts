import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-carousel',
  imports: [MatButtonModule, MatCardModule, NgFor],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css',
  animations: [
    trigger('slideAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(100%)' }),
        animate('0.5s ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
      ]),
      transition(':leave', [
        animate('0.5s ease-out', style({ opacity: 0, transform: 'translateX(-100%)' })),
      ]),
    ]),
  ],
})
export class CarouselComponent {

  items = [
    {
      title: 'Planera',
      subtitle: 'XLENT',
      image: 'Planera.PNG',
      description: 'Booking system for municipal sports facilities such as Football Fields',
      git: "https://github.com/Palmen01",
      web: "https://jolly-coast-004c6b20f.6.azurestaticapps.net/home",
    },
    {
      title: 'Chick Chick',
      subtitle: 'Restaurant',
      image: 'template.jpg',
      description: 'A website for my favorite thai restaurant, located in Gävle Sweden',
      git: "https://github.com/Palmen01",
      web: "https://github.com/Palmen01",
    },
    {
      title: 'Work in progress',
      subtitle: 'Application',
      image: 'template.jpg',
      description: 'Will be filled in when project is under way...',
      git: "https://github.com/Palmen01",
      web: "https://github.com/Palmen01",
    },
    {
      title: 'Work in progress',
      subtitle: 'Application',
      image: 'template.jpg',
      description: 'Will be filled in when project is under way...',
      git: "https://github.com/Palmen01",
      web: "https://github.com/Palmen01",
    },
    {
      title: 'Work in progress',
      subtitle: 'Application',
      image: 'template.jpg',
      description: 'Will be filled in when project is under way...',
      git: "https://github.com/Palmen01",
      web: "https://github.com/Palmen01",
    },
    {
      title: 'Work in progress',
      subtitle: 'Application',
      image: 'template.jpg',
      description: 'Will be filled in when project is under way...',
      git: "https://github.com/Palmen01",
      web: "https://github.com/Palmen01",
    },
  ];

  animationState = '';
  visibleItems = this.items.slice(0, 3);
  hiddenItems = this.items.slice(3);

  next() {
    const removedItem = this.visibleItems.shift(); // remove first
    const newItem = this.hiddenItems.shift(); // get new hidden item
    if (newItem) {
      this.visibleItems.push(newItem); // add to visible
      this.hiddenItems.push(removedItem!); // send removed item to back
    }
    this.triggerAnimation();
  }

  previous() {
    const removedItem = this.visibleItems.pop(); // remove last
    const newItem = this.hiddenItems.pop(); // get last hidden item
    if (newItem) {
      this.visibleItems.unshift(newItem); // add to visible start
      this.hiddenItems.unshift(removedItem!); // send removed item to back
    }
    this.triggerAnimation();
  }

  triggerAnimation() {
    this.animationState = 'in';
    setTimeout(() => (this.animationState = ''), 500);
  }
}