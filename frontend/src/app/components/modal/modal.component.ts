import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule, NgIf, NgFor } from '@angular/common'; // Import CommonModule
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-modal',
  standalone: false,
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  @Input() project: Project | null = null;
  @Input() isOpen: boolean = false;
  @Output() close = new EventEmitter<void>();

  onClose(): void {
    this.close.emit();
  }
}
