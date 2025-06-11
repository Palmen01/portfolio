// experience.component.ts
import { NgIf, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

interface WorkExperience {
  company: string;
  position: string;
  period: string;
  description: string;
}

interface Education {
  institution: string;
  degree: string;
  period: string;
  description: string[];
}

@Component({
  selector: 'app-experience',
  imports: [NgIf, NgFor],
  template: ``,
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
   animations: [
    trigger('slideIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)', position: 'absolute', width: '100%' }),
        animate('400ms cubic-bezier(0.4, 0, 0.2, 1)', 
          style({ opacity: 1, transform: 'translateY(0)' })),
        style({ position: 'relative' })
      ]),
      transition(':leave', [
        style({ position: 'absolute', width: '100%' }),
        animate('300ms ease-in', 
          style({ opacity: 0, transform: 'translateY(-20px)' }))
      ])
    ])
  ]
})
export class ExperienceComponent {
  activeSection: 'work' | 'education' = 'work';

  workList: WorkExperience[] = [
    {
      company: 'XLENT (Internship)',
      position: 'System Developer',
      period: '2025 - 4 Months',
      description: 'Developed a booking system for municipal sports facilities.'
    },
    {
      company: 'Vitec ActorSmartBook (Internship)',
      position: 'System Developer',
      period: '2024 - 2 Months',
      description: 'Developed an HTML-to-Markdown converter to replace legacy software.'
    }
  ];

  educationList: Education[] = [
    {
      institution: 'Teknikhögskolan Gävle',
      degree: '.Net Developer',
      period: '2023 - 2025',
      description: [
        'Object-Oriented Programming in C#',
        'Full-Stack Web Development (Frontend & Backend)',
        'Secure Database Optimization & Cloud Services',
        'Secure App Analysis, Planning & Delivery',
        'Framework Development & Algorithms',
        'Agile Workflows, Version Control & Testing',
        'UX, UI'
      ]
    }
  ];

  showSection(section: 'education' | 'work') {
    this.activeSection = section;
  }
}