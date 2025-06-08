import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import {FormControl, FormGroup, FormsModule, Validators} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatIconModule, MatDividerModule, MatButtonModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {

  onSubmit(): void {
    
  }
  
}
