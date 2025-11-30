### Plan for Application Restructuring

This plan aims to refactor your portfolio application to create a more maintainable, scalable, and developer-friendly structure by separating content from presentation and enforcing strong typing.

1.  **Introduce Typed Content Models:**
    *   I will define TypeScript interfaces for all structured content to ensure every property is typed.
    *   **For example:** For the home page, I'll create `Job.ts`, `HeroItem.ts`, and a main `HomePageContent.ts` model to define the structure for the page's dynamic content.
    *   This will make the shape of your data explicit, providing type safety and easier maintenance.

2.  **Create a Centralized Content Service:**
    *   I will implement a `ContentService` to act as a single source of truth for page-specific content.
    *   Initially, this service will hold the content in structured TypeScript objects (e.g., `HOME_PAGE_CONTENT`). This decouples the data from the components.
    *   In the future, this service could be adapted to fetch content from an external source (like a headless CMS or a JSON file) without requiring changes to your components.

3.  **Refactor Components to be Data-Driven:**
    *   Page components (like `HomeComponent`, `AboutMeComponent`) will be refactored to be purely presentational.
    *   They will receive their data from the `ContentService` via an `@Input()` decorator or by subscribing to an observable, making them stateless and reusable. Their role will be to render data, not to own it.

4.  **Implement a Markdown-Based Article System:**
    *   To make adding articles seamless, I will implement a system that dynamically loads and renders articles from Markdown (`.md`) files.
    *   **Article Format:** Each article will be a directory containing an `article.md` file and any related images. Article metadata (title, author, summary) will be defined in a "frontmatter" section at the top of the Markdown file.
    *   **Article Service:** A new `ArticleService` will discover, parse, and serve these articles. It will read the frontmatter for list views and process the Markdown body for the article page. I'll integrate a library like `marked` for Markdown-to-HTML conversion.
    *   **Component Refactoring:**
        *   `ArticlesComponent` will use the `ArticleService` to display a list of all available articles.
        *   `ArticlePageComponent` will be modified to fetch and render the HTML content from the `ArticleService` based on a unique article identifier (slug), completely removing hardcoded content.

5.  **Promote Reusable Content Components:**
    *   Building on your existing `neo-code` and `neo-image` components, I will encourage the creation of a generic `ContentBlockComponent`.
    *   This component would be able to render different types of content (text, images, code) based on a typed model, allowing you to compose complex pages and articles from a series of structured data objects.

Following this plan, adding or modifying content will be as simple as editing a TypeScript object or adding a new Markdown file. The entire structure will be strongly typed, scalable, and much easier to manage.

