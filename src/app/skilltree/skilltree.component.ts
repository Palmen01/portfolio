import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-skilltree',
  imports: [NgFor],
  templateUrl: './skilltree.component.html',
  styleUrl: './skilltree.component.css'
})
export class SkilltreeComponent {
  skills = [
    { name: 'SQL', icon: 'sql.png' },
    { name: 'GitHub', icon: 'github.svg' },
    { name: 'Angular', icon: 'angular.svg' },
    { name: 'C#', icon: 'sharp.svg'},
    { name: '.NET', icon: 'dotnet.svg' },
    { name: 'JavaScript', icon: 'javascript.svg' },
    { name: 'TypeScript', icon: 'typescript.svg' },
  ];
}
