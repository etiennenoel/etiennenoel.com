import { Component } from '@angular/core';
import { Project } from '../../components/modal/modal.component';

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  selectedProject: Project | null = null;
  projects: Project[] = [
    {
      title: "Chrome Built-in AI",
      role: "Engineering Lead",
      desc: "Unlocking local LLM capabilities. I lead the team building the Built-In AI APIs, allowing web apps to run Gemini Nano locally without server latency or cost.",
      tags: ["C++", "TensorFlow", "Chrome"],
      stat: "1B+ Users",
      challenge: "Running LLMs in a browser was historically prohibited by hardware constraints and memory limits. Developers relied on costly cloud inference.",
      solution: "We engineered 'Built-in AI' by embedding Gemini Nano directly into the Chrome binary, developing an IPC optimization layer to stream tokens with near-zero overhead.",
    },
    {
      title: "TSyringe",
      role: "Maintainer",
      desc: "The standard for Dependency Injection in TypeScript. A lightweight container handling complex architecture for thousands of projects worldwide.",
      tags: ["TypeScript", "Open Source", "Architecture"],
      stat: "4M+ Downloads/mo",
      challenge: "TypeScript developers needed a DI solution that felt 'native' using decorators without massive boilerplate or runtime overhead.",
      solution: "TSyringe leverages reflect-metadata to automatically infer dependency types from constructor signatures, keeping bundle size under 3KB.",
    }
  ];

  openProjectDetails(project: Project): void {
    this.selectedProject = project;
  }

  closeProjectDetails(): void {
    this.selectedProject = null;
  }
}
