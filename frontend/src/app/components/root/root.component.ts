import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, Router } from "@angular/router";
import { filter } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';
import { Location, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './root.component.html',
  styleUrl: './root.component.scss'
})
export class RootComponent implements OnInit {
  isBonneFeteAudrey = false;

  constructor(
    private router: Router, 
    private titleService: Title,
    private location: Location,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    // Initial check
    this.checkRoute();

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.checkRoute();
    });
  }

  ngOnInit(): void {
    this.checkRoute();
  }

  private checkRoute() {
    const path = this.location.path();
    this.isBonneFeteAudrey = path.includes('/bonne-fete-audrey') || (isPlatformBrowser(this.platformId) && window.location.pathname.includes('/bonne-fete-audrey'));
  }
}
