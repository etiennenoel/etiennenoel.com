import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule, NgFor, NgIf } from '@angular/common'; // Import CommonModule for NgFor and NgIf
import { GlitchTextComponent } from '../../components/ui/glitch-text/glitch-text.component';
import { GlassCardComponent } from '../../components/ui/glass-card/glass-card.component';

@Component({
  selector: 'app-home',
  standalone: false, // Mark as standalone
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {
  typedText: string = '';
  fullText: string = "Building the Intelligent Web.";
  private typingInterval: any;

  heroItems = [
    { iconClass: 'bi bi-cpu', label: "Gemini Nano", sub: "On-Device Inference" },
    { iconClass: 'bi bi-lightning-charge', label: "WebNN", sub: "Hardware Acceleration" },
    { iconClass: 'bi bi-code', label: "TSyringe", sub: "Dependency Injection" },
    { iconClass: 'bi bi-command', label: "Built-in AI", sub: "Chrome APIs" },
  ];

  jobs = [
    {
      company: "Google Chrome",
      role: "Engineering Manager, Web AI Platform",
      period: "2023 - Present",
      location: "San Francisco, CA",
      desc: "Leading the engineering efforts to bring native AI capabilities to the web platform.",
      impact: [
        "Launched window.ai and Built-in AI APIs, enabling privacy-preserving local inference for millions of users.",
        "Scaling the WebNN implementation to unlock NPU/GPU hardware acceleration across all major OSs.",
        "Managing cross-functional teams (Eng, PM, Research) to define the standards for on-device GenAI."
      ]
    },
    {
      company: "Google Chrome",
      role: "Engineering Manager, Capabilities (Project Fugu)",
      period: "2020 - 2023",
      location: "San Francisco, CA",
      desc: "Managed the team responsible for closing the gap between native and web capabilities.",
      impact: [
        "Shipped the File System Access API, enabling advanced productivity apps (Photoshop, VS Code) to run fully in the browser.",
        "Drove adoption of PWA standards, resulting in a 40% increase in desktop PWA installations.",
        "Led the deprecation strategy for legacy APIs (Web SQL), improving platform security and stability."
      ]
    },
    {
      company: "Open Source",
      role: "Maintainer",
      period: "2019 - Present",
      location: "Global",
      desc: "Active maintenance and stewardship of critical ecosystem tools.",
      impact: [
        "Maintainer of TSyringe (Microsoft), a dependency injection library with 4M+ monthly downloads.",
        "Established community governance models and automated release pipelines to ensure project sustainability."
      ]
    }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
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

  onNavigateToProjects(): void {
    this.router.navigate(['/projects']);
  }
}
