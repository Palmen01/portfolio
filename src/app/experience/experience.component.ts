import { NgIf, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  imports: [NgIf, NgFor],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  activeSection: 'work' | 'education' = 'work';

  educationList = [
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
        'UX, Human-Computer Interaction (HCI) & CSCW'
      ]
    },
  ];

  workList = [
    {
      company: 'XLENT (Internship)',
      position: 'System Developer',
      period: '2025 - 4 Months',
      description: 'Developed a booking system for municipal sports facilities (e.g., Football fields, Tennis courts). Backend: C# with Entity Framework Core using Vertical Slice Architecture. Frontend: Angular 18 with Angular Material (TypeScript, standalone components).'
    },
    {
      company: 'Vitec ActorSmartBook (Internship)',
      position: 'System Developer',
      period: '2024 - 2 Months',
      description: 'Developed an HTML-to-Markdown converter to replace legacy software. Used Vue.js, C#, and SQL to build a stable, user-friendly solution integrated into existing systems.'
    },
  ];

  showSection(section: 'education' | 'work') {
    this.activeSection = section;
  }
}
