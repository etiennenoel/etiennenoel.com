import { Component } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { Article, ArticlePageComponent } from './article-page/article-page.component';

@Component({
  selector: 'app-articles',
  standalone: false,
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss'
})
export class ArticlesComponent {
  readingArticle: boolean = false;
  mockArticle: Article = {
    title: "The Origin Private File System",
    author: "Etienne Noël",
    category: "Performance",
    readTime: "8 MIN"
  };

  setReadingArticle(value: boolean): void {
    this.readingArticle = value;
  }
}
