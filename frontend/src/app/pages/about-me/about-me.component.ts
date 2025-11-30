import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../services/content.service';
import { AboutMeContent } from '../../models/about-me-content.model';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent implements OnInit {
  aboutMeContent: AboutMeContent | undefined;

  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.aboutMeContent = this.contentService.getAboutMeContent();
  }
}
