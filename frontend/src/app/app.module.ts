import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BrowserModule, provideClientHydration} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http'; // Import HttpClientModule
import {HeaderComponent} from './components/header/header.component';
import {LayoutComponent} from './components/layout/layout.component';
import {RootComponent} from './components/root/root.component';
import {AppRoutingModule} from './app.routes';
import {HomeComponent} from './pages/home/home.component';
import {ContactMeComponent} from './pages/contact-me/contact-me.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import {NeuralBackgroundComponent} from './components/core/neural-background/neural-background.component';
import {FloatingNavComponent} from './components/core/floating-nav/floating-nav.component';
import {GlitchTextComponent}from './components/ui/glitch-text/glitch-text.component';
import {GlassCardComponent}from './components/ui/glass-card/glass-card.component';
import {NavItemComponent}from './components/core/floating-nav/nav-item/nav-item.component';
import {EducationComponent}from './pages/education/education.component';
import {CourseViewerComponent}from './pages/education/course-viewer/course-viewer.component';
import {NeoGraphComponent} from './components/content/neo-graph/neo-graph.component';
import {NeoImageComponent} from './components/content/neo-image/neo-image.component';
import {ArticlePageComponent}from './pages/articles/article-page/article-page.component';
import {ModalComponent}from './components/ui/modal/modal.component';
import {ProjectsComponent} from './pages/projects/projects.component';
import { ThemeToggleComponent } from './components/ui/theme-toggle/theme-toggle.component';
import {NeoCodeComponent} from './components/content/neo-code/neo-code.component';
import {ArticlesComponent} from './pages/articles/articles.component';

@NgModule({
  declarations: [
    HeaderComponent,
    LayoutComponent,
    RootComponent,
    NeuralBackgroundComponent,
    NavItemComponent,
    FloatingNavComponent,
    GlitchTextComponent,
    GlassCardComponent,
    EducationComponent, CourseViewerComponent,
    NeoCodeComponent, NeoGraphComponent, NeoImageComponent,
    ArticlePageComponent,
    ModalComponent,
    ArticlesComponent,
    ProjectsComponent,
    ThemeToggleComponent,


    // Pages
    HomeComponent,
    ContactMeComponent,
    AboutMeComponent,
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    BrowserModule,
    RouterModule,
    HttpClientModule, // Add HttpClientModule here
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [RootComponent]
})
export class AppModule {
}
