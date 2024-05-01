import { Component } from '@angular/core';
import { EmailIndexComponent } from '../email-index/email-index.component';
import { RouterOutlet } from '@angular/router';
import { NotFoundComponent } from '../not-found/not-found.component';
import { ModalComponent } from '../../shared/modal/modal.component';
import { EmailCreateComponent } from '../email-create/email-create.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet,
    EmailIndexComponent,
    ModalComponent,
    EmailCreateComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  showModal() {
    throw new Error('Method not implemented.');
  }
}
