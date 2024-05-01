import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ModalComponent } from '../../shared/modal/modal.component';
import { EmailFormComponent } from '../email-form/email-form.component';

@Component({
  selector: 'app-email-create',
  standalone: true,
  imports: [CommonModule, ModalComponent, EmailFormComponent],
  templateUrl: './email-create.component.html',
  styleUrl: './email-create.component.css',
})
export class EmailCreateComponent {
  showModal: boolean = false;
}
