import { Component } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  currentTab: string = 'Home'; // Default active tab

  constructor(private router: Router, private titleService: Title) {}

  ngOnInit(): void {
    // Initialize currentTab based on the initial route
    this.updateCurrentTab(this.router.url);

    // Subscribe to router events to update active tab
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(event => event as NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.updateCurrentTab(event.urlAfterRedirects);
    });
  }

  private updateCurrentTab(url: string): void {
    const path = url.split('/')[1] || ''; // Get the first segment of the path
    switch (path) {
      case 'projects': this.currentTab = 'Projects'; break;
      case 'education': this.currentTab = 'Education'; break;
      case 'articles': this.currentTab = 'Articles'; break;
      case 'contact-me': this.currentTab = 'Contact'; break; // Assuming a 'Contact' tab
      case 'about-me': this.currentTab = 'About Me'; break; // Assuming an 'About Me' tab
      default: this.currentTab = 'Home'; break;
    }
    // Update document title if needed
    // this.titleService.setTitle(this.currentTab + ' - Etienne Noël');
  }

  onTabChange(tab: string): void {
    // The FloatingNavComponent already handles navigation
    // We just need to update the internal state if necessary,
    // though the router subscription will also update it.
    this.currentTab = tab;
  }
}
