import { HeroItem } from './hero-item.model';
import { Job } from './job.model';
import { Education } from './education.model';

export interface HomePageContent {
  typedTextFull: string;
  heroItems: HeroItem[];
  jobs: Job[];
  education: Education[];
}
