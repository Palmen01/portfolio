import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-carousel',
  imports: [NgFor, MatCardModule, MatButtonModule],
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
      title: 'Shiba Inu',
      subtitle: 'Dog Breed',
      image: 'https://material.angular.dev/assets/img/examples/shiba2.jpg',
      description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan...',
    },
    {
      title: 'Golden Retriever',
      subtitle: 'Dog Breed',
      image: 'https://material.angular.dev/assets/img/examples/shiba2.jpg',
      description: 'Golden Retrievers are known for their gentle temperament and friendly personality...',
    },
    {
      title: 'German Shepherd',
      subtitle: 'Dog Breed',
      image: 'https://material.angular.dev/assets/img/examples/shiba2.jpg',
      description: 'German Shepherds are loyal, courageous, and very intelligent...',
    },
    {
      title: 'Labrador Retriever',
      subtitle: 'Dog Breed',
      image: 'https://material.angular.dev/assets/img/examples/shiba2.jpg',
      description: 'Labradors are friendly, outgoing, and high-spirited companions...',
    },
    {
      title: 'Husky',
      subtitle: 'Dog Breed',
      image: 'https://material.angular.dev/assets/img/examples/shiba2.jpg',
      description: 'Huskies are known for their striking appearance and endurance...',
    },
    {
      title: 'Cat',
      subtitle: 'Cat Breed',
      image: 'https://material.angular.dev/assets/img/examples/shiba2.jpg',
      description: 'Cats poop',
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
