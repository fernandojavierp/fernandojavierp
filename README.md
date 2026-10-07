# ¡Hola, soy Fernando Patete! 👋

**Full Stack Engineer | Spec-Driven Development (SDD) & AI-Assisted Architecture**  
📍 Barcelona, España

Diseño y construyo sistemas web modernos y escalables combinando fundamentos sólidos de ingeniería de software con flujos de trabajo asistidos por IA orientados a la producción.

Aplico **Spec-Driven Development (SDD)**: formalizo la arquitectura, interfaces y reglas de contexto (`AGENTS.md`, contratos de API tipados, `.specs`) para dirigir herramientas avanzadas de IA (Google Antigravity) como multiplicadores de productividad técnica, auditando siempre con criterio de ingeniería la **seguridad, concurrencia, rendimiento y atomicidad**.

---

### 🧠 Principios de Ingeniería & Flujo de Trabajo
- **Spec-Driven Development (SDD):** Descomposición de requerimientos en especificaciones técnicas claras y deterministas antes de la fase de implementación.
- **Context Architecture & AI Governance:** Configuración de directrices (`AGENTS.md`, system prompts, workflows) para garantizar que los modelos sigan Clean Architecture, patrones SOLID y principios Fail Fast.
- **Auditoría & Criterio Técnico:** Supervisión y verificación rigurosa del código generado para prevenir alucinaciones, brechas de seguridad, cuellos de botella de rendimiento y condiciones de carrera (*race conditions*).
- **Resiliencia & Edge Performance:** Renderizado estático e híbrido (ISR), validaciones defensivas en el borde y control estricto de transacciones en base de datos.

---

### 🛠️ Stack Tecnológico

| Capa | Tecnologías |
| :--- | :--- |
| **Arquitectura & Principios** | Spec-Driven Development (SDD), Clean Architecture, Domain-Driven Design (DDD), Concurrencia y Transaccionalidad |
| **Frontend & UI** | Next.js 16 (App Router, Server Components, ISR), React 19, TypeScript, Tailwind CSS v4, Vanilla CSS, Framer Motion |
| **Backend & Base de Datos** | Node.js, Strapi v5 (Headless CMS), PostgreSQL, REST APIs, Webhooks |
| **Infraestructura & DevOps** | Docker & Compose, Dokploy, VPS Linux (Ubuntu), Traefik (Reverse Proxy, SSL automático), Cloudflare (DNS / R2), GitHub Actions (CI/CD con GHCR) |
| **AI Workflows & Tooling** | Google Antigravity, MCP Servers, `AGENTS.md`, System Prompts estructurados |
| **Integraciones & Servicios** | Stripe API, Resend API, Cloudflare R2 |

---

### 🌟 Proyectos Destacados en Producción

#### 🎨 [BF4 Gallery](https://www.bf4gallery.com/) — *Headless Art E-Commerce*
Plataforma e-commerce headless de alta fidelidad diseñada para la gestión y venta de colecciones privadas y exposiciones de arte contemporáneo (piezas únicas).
- **Stack:** Next.js 16, React 19, TypeScript, Strapi v5, PostgreSQL, Docker, Dokploy, Cloudflare R2, Stripe, Resend.
- **Control de Concurrencia (Atomic Inventory Lock):** Implementación de bloqueos atómicos a nivel de base de datos (`updateMany` condicional en PostgreSQL) para prevenir sobreventas bajo peticiones simultáneas, bloqueando la reserva temporalmente por 6 minutos durante el checkout.
- **On-Demand ISR:** Estrategia de renderizado estático combinada con revalidación instantánea bajo demanda mediante webhooks automáticos desde Strapi al publicar o editar obras.
- **Integraciones:** Stripe Checkout configurado con gestión dinámica de impuestos (21% IVA comunitario vs. 0% exportación extra-UE) y correos transaccionales automatizados con Resend.
- **Infraestructura & CI/CD:** Despliegue continuo con GitHub Actions que compila imágenes a GHCR y orquesta el servicio en VPS mediante Dokploy tras Traefik con SSL automático.

#### ⚡ [WebP Image Converter & Compressor](https://image-compressor-fernandojavierps-projects.vercel.app/)
Herramienta web client-side desarrollada para el equipo editorial de la galería, orientada a optimizar el flujo de catalogación previo a la subida al CMS y Cloudflare R2.
- **Stack:** JavaScript nativo, Canvas API, Web Workers, PDF.js, FileReader API, JSZip, UTIF.js, Glassmorphism UI.
- **Procesamiento en el Navegador:** Conversión y compresión a WebP (90% de calidad) multiformato por lotes (incluyendo PDF multipágina, TIFF y HEIC) ejecutada 100% en el cliente sin transferir datos a servidores externos, garantizando privacidad y cero coste de computación en backend.

#### 🎬 [jonathangarciaherrera.com](https://jonathangarciaherrera.com) — *Astro SSG & Cinematic Streaming Platform*
Plataforma audiovisual y portfolio cinematográfico de autor diseñado con foco en narrativa visual e hiper-rendimiento.
- **Stack:** Astro 5+, React 19, Sanity CMS (GROQ), Cloudflare R2, Cloudflare Pages, GSAP 3, Tailwind CSS v4.
- **Rendimiento Edge:** Arquitectura de islas interactivas sobre HTML estático puro (SSG) con hidratación selectiva de micro-animaciones (GSAP / Lenis / Framer Motion).
- **Zero-Egress Media Streaming:** Infraestructura de distribución multimedia basada en Cloudflare R2 y un reproductor de vídeo propio, evitando publicidad y sobrecostes de transferencia de datos.
- **Headless Content Hub:** Gestión de catálogo y taxonomías audiovisuales en Sanity Studio sincronizado en tiempo de compilación.

---

### 📬 Conectemos
- 💼 **LinkedIn**: [fernando-patete-gonzalez](https://www.linkedin.com/in/fernando-patete-gonzalez)
- 📧 **Email**: [fpatetegonzalez@gmail.com](mailto:fpatetegonzalez@gmail.com)
