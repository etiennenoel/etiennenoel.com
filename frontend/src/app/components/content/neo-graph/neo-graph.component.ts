import { Component, Input } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-neo-graph',
  standalone: false,
  templateUrl: './neo-graph.component.html',
  styleUrl: './neo-graph.component.scss'
})
export class NeoGraphComponent {
  @Input() type: string = 'flow';
}
