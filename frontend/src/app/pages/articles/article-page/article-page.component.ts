import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import {Article, ArticleMetadata} from '../../../models/article.model';
import {ArticleService} from '../../../services/article.service';

@Component({
  selector: 'app-article-page',
  standalone: false,
  templateUrl: './article-page.component.html',
  styleUrl: './article-page.component.scss'
})
export class ArticlePageComponent implements OnInit {
  article: Article | undefined;
  articleMetadata: ArticleMetadata | undefined;
  sanitizedHtmlContent: SafeHtml | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private articleService: ArticleService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug');
      if (slug) {
        this.articleService.getArticle(slug).subscribe((article: Article | undefined) => {
          if (article) {
            if (article.metadata.isExternal && article.metadata.externalUrl) {
              window.location.href = article.metadata.externalUrl;
              return;
            }

            this.article = article;
            this.articleMetadata = article.metadata;
            this.sanitizedHtmlContent = this.sanitizer.bypassSecurityTrustHtml(article.htmlContent);
          } else {
            this.router.navigate(['/articles']);
          }
        });
      }
    });
  }
}
