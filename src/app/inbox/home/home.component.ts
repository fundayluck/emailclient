import { Component } from '@angular/core';
import { EmailIndexComponent } from '../email-index/email-index.component';
import { RouterOutlet } from '@angular/router';
import { NotFoundComponent } from '../not-found/not-found.component';
import { ModalComponent } from '../../shared/modal/modal.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, EmailIndexComponent, ModalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
