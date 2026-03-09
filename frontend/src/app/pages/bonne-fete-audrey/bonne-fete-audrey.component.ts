import { Component, HostListener, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-bonne-fete-audrey',
  templateUrl: './bonne-fete-audrey.component.html',
  styleUrls: ['./bonne-fete-audrey.component.scss']
})
export class BonneFeteAudreyComponent implements OnInit {
  scrollY = 0;
  isLoaded = false;
  isBrowser = false;
  currentYear = new Date().getFullYear();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      setTimeout(() => {
        this.isLoaded = true;
      }, 100);
      this.scrollY = window.scrollY;
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    if (this.isBrowser) {
      this.scrollY = window.scrollY;
    }
  }
}