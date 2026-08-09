# 📋 PRD-001: Especificación Funcional Baseline proto-landing-ui v1.0.0

> **ID Especificación:** PRD-001  
> **Producto:** proto-landing-ui  
> **Versión Relacionada:** v1.0.0  

---

## 1. 🎯 Historias de Usuario (User Stories) & BDD

### US-001: Exploración del Portafolio y Showcase de Productos
* **Como**: Visitante del portal.
* **Quiero**: Ver las tarjetas informativas de los productos del ecosistema AiLab.
* **Para**: Comprender las soluciones disponibles y sus capacidades técnicas.

#### Criterios de Aceptación:
```gherkin
Escenario: Renderizado del Showcase en SSR
  Dado que un usuario ingresa a "http://localhost:8082"
  Cuando el servidor Nginx responde con la página pre-renderizada por Angular SSR
  Entonces la página debe mostrar las 6 tarjetas de proyectos del portafolio
  Y el puntaje de rendimiento de carga First Contentful Paint (FCP) debe ser < 1.0s.
```
