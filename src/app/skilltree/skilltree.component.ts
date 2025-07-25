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
    { name: 'Docker', icon: 'docker.svg' },
    { name: 'Azure', icon: 'azure.png' },
    { name: 'Angular', icon: 'angular.svg' },
    { name: 'Vue.js', icon: 'vuedotjs.svg' },
    { name: 'C#', icon: 'csharp.png'},
    { name: '.NET', icon: 'dotnet.svg' },
    { name: 'JavaScript', icon: 'javascript.svg' },
    { name: 'TypeScript', icon: 'typescript.svg' },
    { name: 'HTML', icon: 'html5.svg' },
    { name: 'CSS', icon: 'css.svg' },
    { name: 'GitHub', icon: 'github.svg' },
  ];
}