import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-neo-image',
  standalone: false,
  templateUrl: './neo-image.component.html',
  styleUrl: './neo-image.component.scss'
})
export class NeoImageComponent {
  @Input() caption: string = '';
}
