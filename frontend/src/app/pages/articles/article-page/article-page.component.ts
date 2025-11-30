import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { NeoImageComponent } from '../../../components/content/neo-image/neo-image.component';
import { NeoCodeComponent } from '../../../components/content/neo-code/neo-code.component';
import { ArticleService } from '../../../services/article.service';
import { Article, ArticleMetadata } from '../../../models/article.model';

@Component({
  selector: 'app-article-page',
  standalone: false,
  templateUrl: './article-page.component.html',
  styleUrl: './article-page.component.scss'
})
export class ArticlePageComponent implements OnInit {
  @Input() slug: string | null = null;
  @Output() close = new EventEmitter<void>();

  article: Article | undefined;
  articleMetadata: ArticleMetadata | undefined;
  sanitizedHtmlContent: SafeHtml | undefined;

  constructor(
    private articleService: ArticleService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    if (this.slug) {
      this.articleService.getArticle(this.slug).subscribe( (article: Article | undefined) => {
        if (article) {
          this.article = article;
          this.articleMetadata = article.metadata;
          this.sanitizedHtmlContent = this.sanitizer.bypassSecurityTrustHtml(article.htmlContent);
        }
      });
    }
  }

  onClose(): void {
    this.close.emit();
  }
}
