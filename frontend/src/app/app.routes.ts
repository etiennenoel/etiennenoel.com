import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {RootComponent} from './components/root/root.component';
import {LayoutComponent} from './components/layout/layout.component';
import {HomeComponent} from './pages/home/home.component';
import {ContactMeComponent} from './pages/contact-me/contact-me.component';
import {AboutMeComponent} from './pages/about-me/about-me.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { EducationComponent } from './pages/education/education.component';
import { ArticlesComponent } from './pages/articles/articles.component';

export const routes: Routes = [
  {
    path: "",
    component: RootComponent,
    children: [
      {
        path: "",
        component: LayoutComponent,
        children: [
          {
            path: "",
            component: HomeComponent,
          },
          {
            path: "projects",
            component: ProjectsComponent,
          },
          {
            path: "education",
            component: EducationComponent,
          },
          {
            path: "articles",
            component: ArticlesComponent,
          },
          {
            path: "contact-me",
            component: ContactMeComponent,
          },
          {
            path: "about-me",
            component: AboutMeComponent,
          }
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
