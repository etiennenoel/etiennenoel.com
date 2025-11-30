import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NavItemComponent } from './nav-item/nav-item.component';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router'; // Import Router for navigation

@Component({
  selector: 'app-floating-nav',
  standalone: false,
  templateUrl: './floating-nav.component.html',
  styleUrl: './floating-nav.component.scss'
})
export class FloatingNavComponent {
  @Input() activeTab: string = 'Home'; // Default active tab
  @Output() tabChange = new EventEmitter<string>();

  tabs: string[] = ['Home', 'Projects', 'Publications'];

  constructor(private router: Router) {} // Inject Router

  onTabClick(tab: string): void {
    this.activeTab = tab; // Update internal active tab
    this.tabChange.emit(tab); // Emit the change to the parent component
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top
    this.router.navigate([this.getRoutePath(tab)]); // Navigate to the new route
  }

  // Helper to map tab names to route paths
  private getRoutePath(tab: string): string {
    switch (tab) {
      case 'Home': return ''; // Default route for home
      case 'Projects': return 'projects';
      case 'Publications': return 'articles';
      default: return '';
    }
  }
}
