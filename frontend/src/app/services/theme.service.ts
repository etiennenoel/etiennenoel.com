import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly THEME_KEY = 'theme';
  private readonly DARK_THEME_CLASS = 'dark-theme';
  private readonly LIGHT_THEME_CLASS = 'light-theme';

  public theme = signal<string>('light');

  constructor() {
    const storedTheme = localStorage.getItem(this.THEME_KEY);
    if (storedTheme) {
      this.theme.set(storedTheme);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.theme.set(prefersDark ? 'dark' : 'light');
    }
  }

  toggleTheme(): void {
    const newTheme = this.theme() === 'dark' ? 'light' : 'dark';
    this.theme.set(newTheme);
    localStorage.setItem(this.THEME_KEY, newTheme);
    if (newTheme === 'dark') {
      document.body.classList.add(this.DARK_THEME_CLASS);
      document.body.classList.remove(this.LIGHT_THEME_CLASS);
    } else {
      document.body.classList.add(this.LIGHT_THEME_CLASS);
      document.body.classList.remove(this.DARK_THEME_CLASS);
    }
  }

  isDarkMode(): boolean {
    return this.theme() === 'dark';
  }
}