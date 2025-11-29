import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-glass-card',
  standalone: false,
  templateUrl: './glass-card.component.html',
  styleUrl: './glass-card.component.scss'
})
export class GlassCardComponent {
  @Input() className: string = '';
  @Input() hover: boolean = true;
  @Output() cardClick = new EventEmitter<void>();

  onClick(): void {
    this.cardClick.emit();
  }

  cardClasses(): string {
    const baseClasses = `
      relative overflow-hidden
      bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6
    `;
    const hoverClasses = this.hover
      ? 'hover:border-blue-500/30 hover:bg-white/10 hover:shadow-[0_0_30px_-10px_rgba(59,130,246,0.2)] transition-all duration-500 group cursor-pointer'
      : '';

    return `${baseClasses} ${hoverClasses} ${this.className}`;
  }
}
