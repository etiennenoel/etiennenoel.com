import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NeoImageComponent } from '../../../components/content/neo-image/neo-image.component';
import { NeoCodeComponent } from '../../../components/content/neo-code/neo-code.component';

export interface Article {
  title: string;
  author: string;
  category: string;
  readTime: string;
  // Add other properties as needed if the React example had more dynamic content
}

@Component({
  selector: 'app-article-page',
  standalone: false,
  templateUrl: './article-page.component.html',
  styleUrl: './article-page.component.scss'
})
export class ArticlePageComponent {
  @Input() article: Article | null = null;
  @Output() close = new EventEmitter<void>();

  onClose(): void {
    this.close.emit();
  }
}
