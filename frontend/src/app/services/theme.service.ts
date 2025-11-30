import { Inject, Injectable, OnDestroy, PLATFORM_ID, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ThemeService implements OnDestroy {
  private readonly THEME_KEY = 'theme';
  private readonly DARK_THEME_CLASS = 'dark-theme';
  private readonly LIGHT_THEME_CLASS = 'light-theme';

  public theme = signal<string>('light');
  private prefersDarkMQ: MediaQueryList | undefined;
  private mqListener: ((e: MediaQueryListEvent) => void) | undefined;


  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    if (isPlatformBrowser(this.platformId)) {
      const storedTheme = localStorage.getItem(this.THEME_KEY);
      if (storedTheme) {
        this.theme.set(storedTheme);
      } else {
        this.prefersDarkMQ = window.matchMedia('(prefers-color-scheme: dark)');
        this.theme.set(this.prefersDarkMQ.matches ? 'dark' : 'light');

        this.mqListener = (e: MediaQueryListEvent) => {
          if (!localStorage.getItem(this.THEME_KEY)) {
            this.theme.set(e.matches ? 'dark' : 'light');
            this.applyTheme(this.theme());
          }
        };
        this.prefersDarkMQ.addEventListener('change', this.mqListener);
      }
      this.applyTheme(this.theme());
    }
  }

  ngOnDestroy(): void {
    if (this.prefersDarkMQ && this.mqListener) {
      this.prefersDarkMQ.removeEventListener('change', this.mqListener);
    }
  }

  toggleTheme(): void {
    const newTheme = this.theme() === 'dark' ? 'light' : 'dark';
    this.theme.set(newTheme);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.THEME_KEY, newTheme);
    }
    this.applyTheme(newTheme);
  }

  private applyTheme(theme: string): void {
    if (isPlatformBrowser(this.platformId)) {
      if (theme === 'dark') {
        document.body.classList.add(this.DARK_THEME_CLASS);
        document.body.classList.remove(this.LIGHT_THEME_CLASS);
      } else {
        document.body.classList.add(this.LIGHT_THEME_CLASS);
        document.body.classList.remove(this.DARK_THEME_CLASS);
      }
    }
  }

  isDarkMode(): boolean {
    return this.theme() === 'dark';
  }
}