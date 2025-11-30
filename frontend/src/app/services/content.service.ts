import { Injectable } from '@angular/core';
import { HomePageContent } from '../models/home-page-content.model';
import { AboutMeContent } from '../models/about-me-content.model'; // Import AboutMeContent
import { Education } from '../models/education.model';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  private homePageContent: HomePageContent = {
    typedTextFull: "Building the Intelligent Web.",
    heroItems: [
      { iconClass: 'bi bi-cpu', label: "Gemini Nano", sub: "On-Device Inference" },
      { iconClass: 'bi bi-lightning-charge', label: "WebNN", sub: "Hardware Acceleration" },
      { iconClass: 'bi bi-code', label: "TSyringe", sub: "Dependency Injection" },
      { iconClass: 'bi bi-command', label: "Built-in AI", sub: "Chrome APIs" },
    ],
    jobs: [
      {
        company: "Google Chrome",
        role: "Web AI Lead Engineering Manager, Web AI Platform",
        period: "2024 - Present",
        location: "San Francisco, CA",
        desc: "Leading the engineering efforts to bring native AI capabilities to the web platform.",
        impact: [
          "Launched Built-in AI APIs, enabling privacy-preserving local inference for millions of users.",
          "Scaling the WebNN implementation to unlock NPU/GPU hardware acceleration across all major OSs.",
          "Managing cross-functional teams (Eng, PM, Research) to define the standards for on-device GenAI."
        ]
      },
      {
        company: "Google Chrome",
        role: "Engineering Manager, Capabilities (Project Fugu)",
        period: "2022 - 2024",
        location: "San Francisco, CA",
        desc: "Managed the team responsible for closing the gap between native and web capabilities.",
        impact: [
          "Shipped the File System Access API, enabling advanced productivity apps (Photoshop, VS Code) to run fully in the browser.",
          "Drove adoption of PWA standards, resulting in a 40% increase in desktop PWA installations.",
          "Led the deprecation strategy for legacy APIs (Web SQL), improving platform security and stability."
        ]
      }
    ],
    education: [
      {
        institution: "Ecole Polytechnique de Montreal",
        degree: "Bachelor Degree",
        major: "Software Engineering",
        graduationYear: "2014",
        location: "Montreal, QC"
      },
      {
        institution: "College Champlain, Saint-Lambert",
        degree: "DEC",
        major: "Pure & Applied Sciences",
        graduationYear: "2009",
        location: "Saint-Lambert, QC"
      }
    ]
  };

  private aboutMeContent: AboutMeContent = {
    title: "About me",
  };

  constructor() { }

  getHomePageContent(): HomePageContent {
    return this.homePageContent;
  }

  getAboutMeContent(): AboutMeContent {
    return this.aboutMeContent;
  }
}
