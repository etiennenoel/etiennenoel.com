import { Component, Input, Output, EventEmitter } from '@angular/core';

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

  onMouseOver(event: MouseEvent): void {
    if (!this.active) {
      const target = event.target as HTMLElement;
      target.style.color = 'var(--text-primary)';
      target.style.backgroundColor = 'var(--bg-glass-hover)';
    }
  }

  onMouseOut(event: MouseEvent): void {
    if (!this.active) {
      const target = event.target as HTMLElement;
      target.style.color = 'var(--text-muted)';
      target.style.backgroundColor = 'transparent';
    }
  }
}
