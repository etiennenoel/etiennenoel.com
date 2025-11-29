import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-glitch-text',
  standalone: false,
  templateUrl: './glitch-text.component.html',
  styleUrl: './glitch-text.component.scss'
})
export class GlitchTextComponent {
  @Input() text: string = '';
}
