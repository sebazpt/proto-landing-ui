# Application Features & Roadmap - Landing Site

This document tracks the functional features, technical implementation details, and the future roadmap of the **Landing Site** application.

---

## ✅ Implemented Features

### 1. Portfolio Showcase
*   **Description:** A dynamic gallery of projects and professional work.
*   **Technical Implementation:**
    *   **Service:** `PortfolioApiService` (`src/app/core/services/portfolio-api.service.ts`).
    *   **Data Model:** `PortfolioItem` interface (`src/app/core/models/portfolio.model.ts`).
    *   **State Management:** Uses Angular **Signals** (`items`, `isLoading`, `error`) for reactive UI updates and a `computed` signal (`hasItems`) for conditional rendering.
    *   **Features:** Asynchronous data fetching with loading states and error handling.

### 2. Contact System
*   **Description:** A functional contact form allowing users to send messages.
*   **Technical Implementation:**
    *   **Service:** `ContactApiService` (`src/app/core/services/contact-api.service.ts`).
    *   **Data Model:** `ContactForm` and `ContactResponse` interfaces (`src/app/core/models/contact.model.ts`).
    *   **State Management:** Reactive state via Signals (`isSubmitting`, `submitSuccess`, `error`).
    *   **Features:** Form submission to backend API, input validation (handled at component level), and submission feedback (Success/Error).

### 3. Core UI & Navigation
*   **Description:** High-performance, mobile-first user interface with smooth navigation.
*   **Technical Implementation:**
    *   **Service:** `ScrollService` (`src/app/core/services/scroll.service.ts`).
    *   **Styling:** Tailwind CSS 4.x for utility-first responsive design.
    *   **Features:**
        *   **Smooth Scroll:** Programmatic scrolling to specific sections (`scrollToSection`) and "Back to Top" (`scrollToTop`) functionality.
        *   **Immutability:** Usage of `readonly` properties in models to ensure data integrity across the application.

---

## 📅 Roadmap & Planned Features

### Phase 1: UX & Personalization (Short Term)
- [ ] **Dark Mode Support:** Implementation of a theme toggle using Tailwind's dark mode and a `ThemeService`.
- [ ] **Skills Matrix:** Categorized display of technologies using the `Technology` model category (`frontend`, `backend`, etc.).
- [ ] **Animations:** Integration of scroll-triggered animations (e.g., AOS or GSAP).

### Phase 2: Content & Global Reach (Mid Term)
- [ ] **Multi-language (i18n):** Support for English and Spanish localizations.
- [ ] **Blog/Articles Section:** Integration of a Markdown-based blog or external API (Medium/Dev.to).

### Phase 3: Advanced Integrations (Long Term)
- [ ] **Admin Dashboard:** Private route to manage portfolio items without manual code changes.
- [ ] **Real-time Analytics:** Dashboard to track project click-through rates.
- [ ] **PWA Support:** Convert the landing site into a Progressive Web App for offline access.
