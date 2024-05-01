import { Component } from '@angular/core';
import { EmailIndexComponent } from '../email-index/email-index.component';
import { RouterOutlet } from '@angular/router';
import { NotFoundComponent } from '../not-found/not-found.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, EmailIndexComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
