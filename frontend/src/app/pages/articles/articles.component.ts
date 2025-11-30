import { Component, OnInit } from '@angular/core';
import { CommonModule, NgIf, NgFor } from '@angular/common'; // Ensure NgFor is imported
import { ArticleService } from '../../services/article.service';
import { ArticleMetadata } from '../../models/article.model';
import { ArticlePageComponent } from './article-page/article-page.component';

@Component({
  selector: 'app-articles',
  standalone: false,
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss'
})
export class ArticlesComponent implements OnInit {
  selectedArticleSlug: string | null = null;
  articles: ArticleMetadata[] = [];

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.articleService.getArticlesMetadata().subscribe(articles => {
      this.articles = articles;
    });
  }

  openArticle(slug: string): void {
    this.selectedArticleSlug = slug;
  }

  closeArticle(): void {
    this.selectedArticleSlug = null;
  }
}
