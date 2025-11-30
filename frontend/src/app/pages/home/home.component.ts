import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule, NgFor, NgIf } from '@angular/common'; // Import CommonModule for NgFor and NgIf
import { GlitchTextComponent } from '../../components/ui/glitch-text/glitch-text.component';
import { GlassCardComponent } from '../../components/ui/glass-card/glass-card.component';
import { ContentService } from '../../services/content.service'; // Import ContentService
import { HeroItem } from '../../models/hero-item.model';
import { Job } from '../../models/job.model';
import { Education } from '../../models/education.model';

@Component({
  selector: 'app-home',
  standalone: false, // Mark as standalone
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {
  typedText: string = '';
  fullText: string = ""; // Will be populated from ContentService
  private typingInterval: any;

  heroItems: HeroItem[] = []; // Will be populated from ContentService

  jobs: Job[] = []; // Will be populated from ContentService

  education: Education[] = []; // Will be populated from ContentService

  constructor(private router: Router, private contentService: ContentService) { }

  ngOnInit(): void {
    const homeContent = this.contentService.getHomePageContent();
    this.fullText = homeContent.typedTextFull;
    this.heroItems = homeContent.heroItems;
    this.jobs = homeContent.jobs;
    this.education = homeContent.education;

    let index = 0;
    this.typingInterval = setInterval(() => {
      this.typedText = this.fullText.slice(0, index);
      index++;
      if (index > this.fullText.length) {
        clearInterval(this.typingInterval);
      }
    }, 50);
  }

  ngOnDestroy(): void {
    if (this.typingInterval) {
      clearInterval(this.typingInterval);
    }
  }

  onScrollToExperience(): void {
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
  }

  onScrollToEducation(): void {
    document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' });
  }

  onNavigateToProjects(): void {
    this.router.navigate(['/projects']);
  }
}

