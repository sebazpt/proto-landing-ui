# Landing Site

A modern, high-performance Single Page Application (SPA) built with **Angular 20** and **Tailwind CSS**. This project is fully containerized using **Docker** and optimized for production deployment with **Nginx**.

## 🚀 Project Overview

*   **Type:** Single Page Application (SPA) with Server-Side Rendering (SSR) capabilities.
*   **Framework:** Angular 20.2.x (Modern/Bleeding Edge)
*   **Styling:** Tailwind CSS 4.x
*   **State Management:** RxJS 7.8
*   **Infrastructure:** Docker (Multi-stage build), Nginx (Alpine Linux)

## 🛠️ Technical Stack

| Component | Technology | Version | Description |
| :--- | :--- | :--- | :--- |
| **Framework** | Angular | ^20.2.2 | Core frontend framework |
| **Runtime** | Node.js | 22 (Alpine) | Build & SSR environment |
| **Language** | TypeScript | ~5.9.2 | Strictly typed JavaScript |
| **Styling** | Tailwind CSS | ^4.1.18 | Utility-first CSS framework |
| **Server** | Nginx | Alpine | Production static asset server |
| **Container** | Docker | - | Containerization & Orchestration |

## 📂 Project Structure

```text
projects/landing-site/
├── .docker/                # Docker configuration contexts (if any)
├── public/                 # Static assets (images, fonts, icons)
├── src/
│   ├── app/                # Application source code (components, services)
│   ├── assets/             # Module-specific assets
│   ├── environments/       # Environment configurations (prod, dev)
│   ├── index.html          # HTML entry point
│   ├── main.ts             # Application entry point
│   ├── main.server.ts      # SSR entry point
│   └── styles.css          # Global styles (Tailwind imports)
├── angular.json            # Angular CLI configuration
├── Dockerfile              # Multi-stage Docker build definition
├── docker-compose.yml      # Docker orchestration config
├── nginx.conf              # Nginx server configuration
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

## ⚡ Key Features

*   **Production-Ready Infrastructure:** Includes a multi-stage `Dockerfile` that builds the app in a Node.js environment and serves it via a lightweight Nginx container.
*   **Optimized Nginx Config:** The `nginx.conf` is pre-configured for:
    *   SPA Routing (fallback to `index.html`).
    *   Gzip Compression for text, JSON, and CSS.
    *   Security Headers (X-Frame-Options, X-Content-Type-Options, etc.).
    *   Efficient Caching policies for static assets.
*   **Developer Experience:** configured with `Prettier` for code formatting and `PostCSS`.

## 🏁 Getting Started

### Prerequisites

*   **Node.js** (v20 or higher)
*   **npm** (v10 or higher)
*   **Docker** & **Docker Compose** (for containerized execution)

### Local Development

1.  **Install Dependencies:**
    ```bash
    npm install
    ```

2.  **Start Development Server:**
    ```bash
    npm start
    # or
    ng serve
    ```
    Access the app at `http://localhost:4200`.

3.  **Build for Production:**
    ```bash
    npm run build
    ```
    Artifacts will be stored in the `dist/` directory.

4.  **Run Tests:**
    ```bash
    npm test
    ```

### 🐳 Docker Deployment

This project follows the **"DevOps Ready"** standard.

1.  **Build and Run with Docker Compose:**
    ```bash
    docker-compose up --build -d
    ```

2.  **Access the Application:**
    Open `http://localhost:4200` (mapped to port 80 inside the container).

3.  **Check Container Health:**
    The `docker-compose.yml` includes a health check ensuring Nginx is responding.
    ```bash
    docker ps
    ```

4.  **Stop Containers:**
    ```bash
    docker-compose down
    ```

## 📄 License

Private - IA Laboratories.
