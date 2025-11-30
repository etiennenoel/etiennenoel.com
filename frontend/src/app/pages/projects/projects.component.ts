import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project.model';
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this.projects = this.contentService.getProjects();
  }
}
