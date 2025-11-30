import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, forkJoin } from 'rxjs';
import { map, switchMap, shareReplay } from 'rxjs/operators';
import * as marked from 'marked';
import frontMatter from 'front-matter';
import { Article, ArticleMetadata } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private articlesMetadata$: Observable<ArticleMetadata[]>;

  constructor(private http: HttpClient) {
    this.articlesMetadata$ = of(["the-origin-private-file-system"]).pipe(
      switchMap(slugs => {
        if (!slugs || slugs.length === 0) {
          return of([]);
        }
        const metadataObs = slugs.map(slug =>
          this.http.get(`assets/articles/${slug}/article.md`, { responseType: 'text' }).pipe(
            map(markdownContent => {
              const parsedMatter = frontMatter<any>(markdownContent);
              return {
                ...parsedMatter.attributes,
                slug: slug,
              } as ArticleMetadata;
            })
          )
        );
        return forkJoin(metadataObs);
      }),
      map(articles => articles.sort((a, b) => new Date(b.publicationDate).getTime() - new Date(a.publicationDate).getTime())),
      shareReplay(1)
    );
  }

  getArticlesMetadata(): Observable<ArticleMetadata[]> {
    return this.articlesMetadata$;
  }

  getArticle(slug: string): Observable<Article | undefined> {
    const markdownPath = `assets/articles/${slug}/article.md`;

    return this.http.get(markdownPath, { responseType: 'text' }).pipe(
      map(markdownContent => {
        if (!markdownContent) {
          return undefined;
        }
        const parsedMatter = frontMatter<any>(markdownContent);
        const htmlContent = marked.parse(parsedMatter.body);

        return {
          metadata: { ...parsedMatter.attributes, slug: slug } as ArticleMetadata,
          htmlContent: htmlContent,
        } as Article;
      })
    );
  }
}
