# Update Plan: Apply New Design to Angular Project

This document outlines the steps to update the existing Angular application to match the new design and add the new pages/sections. This will be done **within the existing Angular framework**, using the Tailwind CSS CDN for styling.

## 1. Setup Tailwind CSS via CDN

To quickly apply the new design, we will use the Tailwind CSS Play CDN. This avoids changes to the build process.

**Note:** The CDN is great for development and prototyping. For a production environment, it is recommended to set up Tailwind CSS as a build-time dependency for better performance and to enable all features.

- **Update `src/index.html`:**
  - Add the following `<script>` tag to the `<head>` section of your `src/index.html` file:
    ```html
    <script src="https://cdn.tailwindcss.com"></script>
    ```

## 2. Create New Components and Pages

We will use the Angular CLI to scaffold the new components required for the design.

- **Generate New Pages:**
  ```bash
  ng generate component pages/projects
  ng generate component pages/education
  ng generate component pages/articles
  ```

- **Generate Shared UI Components:**
  ```bash
  ng generate component components/ui/glass-card
  ng generate component components/ui/glitch-text
  ng generate component components/ui/modal
  ```

- **Generate Core Visual Components:**
  ```bash
  ng generate component components/core/neural-background
  ng generate component components/core/floating-nav
  ```

## 3. Update Routing

We will add the new pages to the application's routing configuration.

- **Update `src/app/app.routes.ts`:**
  - Add routes for the new pages. The existing `HomeComponent` will serve as the "Home" route.
    ```typescript
    // src/app/app.routes.ts
    import { Routes } from '@angular/router';
    import { HomeComponent } from './pages/home/home.component';
    import { ProjectsComponent } from './pages/projects/projects.component';
    import { EducationComponent } from './pages/education/education.component';
    import { ArticlesComponent } from './pages/articles/articles.component';

    export const routes: Routes = [
      { path: '', component: HomeComponent, title: 'Home' },
      { path: 'projects', component: ProjectsComponent, title: 'Projects' },
      { path: 'education', component: EducationComponent, title: 'Education' },
      { path: 'articles', component: ArticlesComponent, title: 'Articles' },
      // ... other routes
    ];
    ```

## 4. Implement Component Logic and Styling (Translation)

This is the core part of the update. We will translate the React components into their new Angular counterparts.

- **`NeuralBackgroundComponent`:**
  - Adapt the `useEffect` logic from the React component into the `ngOnInit` and `ngAfterViewInit` lifecycle hooks in `neural-background.component.ts`.
  - Use `@ViewChild` to get a reference to the `<canvas>` element in the component's template.
  - Implement `ngOnDestroy` to clean up event listeners and animation frames.

- **Update `LayoutComponent` and `RootComponent`:**
  - Add `<app-neural-background>` to the main layout/root component so it's always present.
  - Add `<app-floating-nav>` to the layout. This new component will contain the navigation logic that was at the bottom of the React `App` component, using `[routerLink]` for navigation.
  - The main content area should contain the `<router-outlet>`.

- **Update `HomeComponent`:**
  - The content of the `Hero` and `ExperienceSection` from the React code will be translated into the `home.component.html`.
  - The typing animation for "Building the Intelligent Web." will be implemented in `home.component.ts`.

- **Implement `ProjectsComponent`:**
  - This component will contain the `ProjectsSection` content.
  - The modal for project details will be implemented using the `ModalComponent`. We'll use a service or a simple `*ngIf` to control its visibility.

- **Implement `EducationComponent` and `ArticlesComponent`:**
  - These will be implemented similarly, translating the corresponding JSX and logic into their Angular component files.
  - The `CourseViewer` and `ArticlePage` will be full-screen overlays, managed within their respective parent components (`EducationComponent`, `ArticlesComponent`).

- **Shared Components (`GlassCard`, `GlitchText`, etc.):**
  - Translate the JSX into the HTML templates for these components.
  - Use `@Input()` decorators for properties that were passed as props in React.

- **Global Styles:**
  - The animations and scrollbar styles from the `<style jsx global>` tag will be moved to `src/styles.scss`.

## 5. Clean Up

- **Refactor/Remove Old Components:**
  - The existing `HeaderComponent` may be replaced by the new `FloatingNavComponent`.
  - Any other components that are no longer needed should be removed.
- **Review and Test:**
  - Thoroughly test the new pages, navigation, and functionality.
