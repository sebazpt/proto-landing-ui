# 🚀 proto-landing-ui — Production Deployment Specification

> **Producto:** proto-landing-ui  
> **Versión:** 1.0.0 Production Release  

---

## 1. 🛡️ Configuración de Producción Nginx

- Multi-stage Dockerfile: Node 22 (Build) ➔ Nginx Alpine (Runtime).
- Compresión Gzip activada para HTML, CSS, JS y JSON.
- Security Headers: `X-Frame-Options DENY`, `X-Content-Type-Options nosniff`.
- Puerto local: `http://localhost:8082`.
