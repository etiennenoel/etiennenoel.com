import { Job } from './job.model';
import { Education } from './education.model';
import { Project } from './project.model';

export interface HomePageContent {
  typedTextFull: string;
  featuredProjects: Project[];
  projects: Project[];
  jobs: Job[];
  education: Education[];
}
