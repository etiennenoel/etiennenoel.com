import { HeroItem } from './hero-item.model';
import { Job } from './job.model';

export interface HomePageContent {
  typedTextFull: string;
  heroItems: HeroItem[];
  jobs: Job[];
}
