import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgClass } from '@angular/common'; // Import NgClass for dynamic class binding

@Component({
  selector: 'app-nav-item',
  standalone: false,
  templateUrl: './nav-item.component.html',
  styleUrl: './nav-item.component.scss'
})
export class NavItemComponent {
  @Input() label: string = '';
  @Input() active: boolean = false;
  @Output() itemClick = new EventEmitter<void>();

  onClick(): void {
    this.itemClick.emit();
  }
}
