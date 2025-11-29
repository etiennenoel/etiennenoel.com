import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from "@angular/router";
import { NeuralBackgroundComponent } from '../core/neural-background/neural-background.component';
import { FloatingNavComponent } from '../core/floating-nav/floating-nav.component';
import { filter, map } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './root.component.html',
  styleUrl: './root.component.scss'
})
export class RootComponent implements OnInit {
  constructor(private router: Router, private titleService: Title) {}

  ngOnInit(): void {
    }
}
