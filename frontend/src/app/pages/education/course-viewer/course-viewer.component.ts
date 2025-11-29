import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NeoCodeComponent } from '../../../components/content/neo-code/neo-code.component';
import { NeoGraphComponent } from '../../../components/content/neo-graph/neo-graph.component';
import { NeoImageComponent } from '../../../components/content/neo-image/neo-image.component';

export interface Module {
  title: string;
}

export interface Course {
  title: string;
  level: string;
  duration: string;
  modules: Module[];
  desc: string;
  tags: string[];
}

@Component({
  selector: 'app-course-viewer',
  standalone: false,
  templateUrl: './course-viewer.component.html',
  styleUrl: './course-viewer.component.scss'
})
export class CourseViewerComponent {
  @Input() course: Course | null = null;
  @Output() close = new EventEmitter<void>();

  currentModule: number = 0;

  onClose(): void {
    this.close.emit();
  }

  setCurrentModule(index: number): void {
    this.currentModule = index;
  }

  get activeLesson(): Module | null {
    return this.course && this.course.modules.length > this.currentModule
      ? this.course.modules[this.currentModule]
      : null;
  }
}
