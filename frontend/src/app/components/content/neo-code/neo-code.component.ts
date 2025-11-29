import { Component, Input } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-neo-code',
  standalone: false,
  templateUrl: './neo-code.component.html',
  styleUrl: './neo-code.component.scss'
})
export class NeoCodeComponent {
  @Input() title: string = '';
  @Input() language: string = 'javascript';
}
