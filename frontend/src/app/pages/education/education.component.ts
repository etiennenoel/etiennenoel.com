import { Component } from '@angular/core';
import { CommonModule, NgIf, NgFor } from '@angular/common';
import { GlitchTextComponent } from '../../components/glitch-text/glitch-text.component';
import { GlassCardComponent } from '../../components/glass-card/glass-card.component';
import { Course, CourseViewerComponent } from './course-viewer/course-viewer.component';

@Component({
  selector: 'app-education',
  standalone: false,
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  activeCourse: Course | null = null;

  courses: Course[] = [
    {
      title: "Built-in AI: The Complete Guide",
      level: "Intermediate",
      duration: "4 Hours",
      modules: [
        { title: "Introduction to Language.create()" },
        { title: "Prompt Engineering for Nano" },
        { title: "Streaming & Token Handling" },
        { title: "Context Window Management" }
      ],
      desc: "Learn to build privacy-first AI apps using Chrome's Gemini Nano integration.",
      tags: ["AI", "Chrome", "JavaScript"] // Tags were part of Project, not Course in React example, but keeping for consistency if needed later
    },
    {
      title: "WebNN Fundamentals",
      level: "Advanced",
      duration: "6 Hours",
      modules: [
         { title: "Hardware Acceleration Basics" },
         { title: "Graph Builders" },
         { title: "Optimizing for NPU" }
      ],
      desc: "Unlock hardware acceleration for machine learning models in the browser.",
      tags: ["WebAssembly", "ML", "Performance"]
    }
  ];

  openCourseViewer(course: Course): void {
    this.activeCourse = course;
  }

  closeCourseViewer(): void {
    this.activeCourse = null;
  }
}
