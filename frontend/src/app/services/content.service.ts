import { Injectable } from '@angular/core';
import { HomePageContent } from '../models/home-page-content.model';
import { AboutMeContent } from '../models/about-me-content.model'; // Import AboutMeContent
import { Education } from '../models/education.model';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  private projects: Project[] = [
    {
      name: 'Built-In AI APIs',
      description: 'Standardizing browser APIs for on-device inference.',
      url: 'https://developer.chrome.com/docs/ai/built-in',
      iconClass: 'bi bi-command',
      tags: ['Web AI', 'Chrome', 'API Design'],
      role: 'Engineering Lead',
      stat: '1B+ Users',
      challenge: 'Running LLMs in a browser was historically prohibited by hardware constraints and memory limits. Developers relied on costly cloud inference.',
      solution: 'We engineered \'Built-in AI\' by embedding Gemini Nano directly into the Chrome binary, developing an IPC optimization layer to stream tokens with near-zero overhead.',
    },
    {
      name: 'Gemini Nano in Chrome',
      description: 'Integrating Google\'s most efficient model directly into the browser.',
      url: 'https://developer.chrome.com/docs/ai/get-started#gemini_nano_in_chrome',
      iconClass: 'bi bi-cpu',
      tags: ['Web AI', 'Chrome', 'On-Device LLM'],
      role: 'Engineering Lead',
      stat: '1B+ Users',
      challenge: 'Challenge placeholder',
      solution: 'Solution placeholder',
    },
    {
      name: 'WebNN API',
      description: 'Hardware acceleration for neural networks on the web.',
      url: 'https://www.w3.org/TR/webnn/',
      iconClass: 'bi bi-lightning-charge',
      tags: ['Web AI', 'W3C', 'Hardware'],
      role: 'Contributor',
      stat: 'W3C Standard',
      challenge: 'Challenge placeholder',
      solution: 'Solution placeholder',
    },
    {
      name: 'Built-In AI Playground',
      description: 'An interactive playground to test and experiment with Chrome\'s Built-In AI.',
      url: 'https://ai.etiennenoel.com/',
      iconClass: 'bi bi-joystick',
      tags: ['Web App', 'Angular', 'Web AI'],
      role: 'Creator',
      stat: 'Side Project',
      challenge: 'Challenge placeholder',
      solution: 'Solution placeholder',
    },
    {
      name: 'Web AI Studio',
      description: 'A studio to create, test, and share AI models for the web.',
      url: 'https://web-ai.studio/',
      iconClass: 'bi bi-palette',
      tags: ['Web App', 'Angular', 'Web AI'],
      role: 'Creator',
      stat: 'Side Project',
      challenge: 'Challenge placeholder',
      solution: 'Solution placeholder',
    },
    {
      name: 'Pristine-TS',
      description: 'A lightweight, modular, and extensible framework for NodeJS.',
      url: 'https://pristine.etiennenoel.com/',
      iconClass: 'bi bi-shield-check',
      tags: ['Open Source', 'NodeJS', 'Framework'],
      role: 'Creator',
      stat: 'Side Project',
      challenge: 'Challenge placeholder',
      solution: 'Solution placeholder',
    },
    {
      name: 'TSyringe (Maintainer)',
      description: 'A lightweight dependency injection container for TypeScript.',
      url: 'https://github.com/microsoft/tsyringe',
      iconClass: 'bi bi-code',
      tags: ['Open Source', 'TypeScript', 'DI'],
      role: 'Maintainer',
      stat: '4M+ Downloads/mo',
      challenge: 'TypeScript developers needed a DI solution that felt \'native\' using decorators without massive boilerplate or runtime overhead.',
      solution: 'TSyringe leverages reflect-metadata to automatically infer dependency types from constructor signatures, keeping bundle size under 3KB.',
    },
  ];

  private homePageContent: HomePageContent = {
    typedTextFull: "Building the Intelligent Web.",
    featuredProjects: this.projects.slice(0, 3),
    projects: this.projects,
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

  getProjects(): Project[] {
    return this.projects;
  }

  getAboutMeContent(): AboutMeContent {
    return this.aboutMeContent;
  }
}
