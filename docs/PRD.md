# 📋 proto-landing-ui — Master Product Requirements Document (PRD)

> **Producto:** proto-landing-ui  
> **Versión:** 1.0.0 Enterprise Baseline  
> **Área / Lab:** Product Discovery (`AI-PDL`) & Engineering (`AISL`)  

---

## 1. 🎯 Alcance Funcional Baseline (v1.0.0 MVP)

- Secciones principales: Hero Banner, Technical Stack Matrix, Ecosystem Showcase (6 Proyectos) y Formulario de Contacto.
- Renderizado del lado del servidor (SSR) mediante `@angular/ssr` en Node 22 / Nginx Alpine.
- Integración Nginx con compresión Gzip, caché de assets estáticos y cabeceras RFC de seguridad.

---

## 📑 2. Requisitos Funcionales (FR)

- **FR-HERO-001**: La sección Hero debe presentar la propuesta de valor principal con botones CTA de navegación suave.
- **FR-SHOW-001**: La sección Showcase debe presentar tarjetas interactivas de los productos del portafolio.
- **FR-FORM-001**: El formulario de contacto debe validar email, nombre y mensaje con estado de envío reactivo.

---

## 📂 3. Índice de Especificaciones Modulares (`docs/landing-prds/`)

- 📄 [PRD-001-core-v1.0.md](file:///Users/ad9sebastian.zapata/Documents/LABORATORIOS/IA/AISL/ia-projects-output/proto-landing-ui/docs/landing-prds/PRD-001-core-v1.0.md) — Especificación Funcional Baseline MVP v1.0.0.
