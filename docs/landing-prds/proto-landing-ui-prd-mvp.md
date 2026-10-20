# PRD: proto-landing-ui MVP v1.0.0

> **Producto:** proto-landing-ui  
> **Tipo Documento:** Product Requirement Document (PRD)  
> **Slug:** `proto-landing-ui-prd-mvp`  
> **Gobernanza:** AISL Feature Documentation Protocol (FDP)  

---

## 1. 🎯 Visión General del Producto

`proto-landing-ui` es la cara pública del ecosistema **AiLab**. Presenta las capacidades técnicas del laboratorio, la arquitectura de agentes, los proyectos activos del portafolio (`gestop`, `proto-api-fastapi`, `proto-mobile-flutter`, `proto-api-springboot`, `apiend`) y provee un formulario reactivo para la captación de requerimientos de usuarios e interesados.

---

## 2. 📋 Requisitos Funcionales (FRs)

| ID | Requisito | Descripción | Criterio de Aceptación |
| :--- | :--- | :--- | :--- |
| **FR-LND-001** | **Hero Section Dinámico** | Presentación de propuesta de valor con CTA hacia el portafolio. | Botón "Explorar Ecosistema" que desplaza suavemente hacia el showcase. |
| **FR-LND-002** | **Matriz de Tecnologías** | Muestra de stacks soportados (Angular, FastAPI, Spring Boot, Flutter, React Native). | Insignias interactivas con filtrado por categoría backend/frontend/mobile. |
| **FR-LND-003** | **Showcase del Portafolio** | Tarjetas de proyectos activos con métricas y stacks. | Tarjetas responsivas renderizando estado MVP, stack técnico y link a docs. |
| **FR-LND-004** | **Formulario de Contacto Reactivo** | Captura de mensajes e interés de usuarios con validaciones en cliente. | Validaciones en tiempo real (email, mensaje > 10 chars), feedback visual al enviar. |

---

## 3. ⚙️ Requisitos No Funcionales (NFRs)

- **NFR-PERF-01:** Server-Side Rendering (SSR) activo para indexación inmediata por motores de búsqueda.
- **NFR-DESIGN-01:** Cumplimiento de estética premium (Tailwind CSS 4, glassmorphism, tipografía Inter/Outfit).
- **NFR-RESP-01:** Diseño responsive fluído adaptado a dispositivos móviles, tablets y escritorio (320px a 1920px).

---

## 4. 📈 Matriz de Trazabilidad

- **Arquitectura C4:** [ARCHITECTURE_C4.md](../ARCHITECTURE_C4.md)
- **Hoja de Ruta:** [BUSINESS_ROADMAP.md](../BUSINESS_ROADMAP.md)
