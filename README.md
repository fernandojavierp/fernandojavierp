# ¡Hola, soy Fernando Patete! 👋

**Full Stack Engineer & DJI Technical Specialist**  
📍 Barcelona, España

Combino fundamentos sólidos de ingeniería de software con experiencia técnica de campo en el ecosistema de drones y equipos audiovisuales DJI.

🚀 **SOFTWARE:** Diseño y construyo sistemas web en producción aplicando **Spec-Driven Development (SDD)**, arquitecturas Headless CMS y DevOps autogestionado. Formalizo requerimientos y reglas de contexto (`AGENTS.md`, interfaces tipadas) para gobernar herramientas de IA como multiplicadores técnicos, auditando con rigor la **seguridad, concurrencia, atomicidad y rendimiento edge**.

🛸 **DRONES & AUDIOVISUAL:** Soporte técnico especializado en el ecosistema DJI (cámaras, drones, estaciones de energía, estabilizadores Ronin/Osmo y robótica de mantenimiento), piloto certificado por **AESA** (A1/A2/A3 y STS).

---

### 🧠 Principios de Ingeniería & Flujo de Trabajo
- **Spec-Driven Development (SDD):** Descomposición de requerimientos en especificaciones técnicas claras y deterministas antes de la fase de implementación.
- **Context Architecture & AI Governance:** Configuración de directrices (`AGENTS.md`, system prompts, workflows) para garantizar que los modelos sigan Clean Architecture, patrones SOLID y principios Fail Fast.
- **Auditoría & Criterio Técnico:** Supervisión y verificación rigurosa del código generado para prevenir alucinaciones, brechas de seguridad, cuellos de botella de rendimiento y condiciones de carrera (*race conditions*).
- **Resiliencia & Edge Performance:** Renderizado estático e híbrido (ISR, Astro SSG), validaciones defensivas en el borde y control estricto de transacciones en base de datos.

---

### 🛠️ Stack Tecnológico & Especialidades

| Capa / Área | Tecnologías & Herramientas |
| :--- | :--- |
| **Arquitectura & Principios** | Spec-Driven Development (SDD), Clean Architecture, Domain-Driven Design (DDD), Concurrencia y Transaccionalidad |
| **Frontend & UI** | Next.js 16 (App Router, Server Components, ISR), React 19, TypeScript, Astro 5+, Tailwind CSS v4, Framer Motion, GSAP |
| **Backend & Base de Datos** | Node.js, Strapi v5 (Headless CMS), Sanity CMS, PostgreSQL, REST APIs, Webhooks |
| **Infraestructura & DevOps** | Docker & Compose, Dokploy, VPS Linux (Ubuntu), Traefik (Reverse Proxy, SSL automático), Cloudflare (DNS, Pages, R2), GitHub Actions (CI/CD con GHCR) |
| **AI Workflows & Tooling** | Google Antigravity, MCP Servers, `AGENTS.md`, System Prompts estructurados |
| **Drones & Audiovisual** | Ecosistema DJI (Drones, Cámaras, Estabilizadores Ronin/Osmo, Estaciones de energía, Robótica), [Credencial Oficial Piloto AESA (A1/A2/A3 y STS)](https://sede.seguridadaerea.gob.es/CID/?identificador=AESASGEEPGEE000IIBKODAA3P32IDA) |
| **Integraciones & Servicios** | Stripe API, Resend API, Cloudflare R2 |

---

### 🌟 Proyectos Destacados en Producción

#### 🎨 [BF4 Gallery](https://www.bf4gallery.com/) — *Headless Art E-Commerce*
Plataforma e-commerce headless de alta fidelidad para la gestión y venta de colecciones privadas y exposiciones de arte contemporáneo (piezas únicas).
- **Stack:** Next.js 16, React 19, TypeScript, Strapi v5, PostgreSQL, Docker, Dokploy, Cloudflare R2, Stripe, Resend.
- **Control de Concurrencia (Atomic Inventory Lock):** Implementación de bloqueos atómicos en PostgreSQL (`updateMany` condicional) para prevenir sobreventas bajo peticiones simultáneas, bloqueando la reserva temporalmente por 6 minutos durante el checkout.
- **On-Demand ISR:** Renderizado estático con revalidación instantánea bajo demanda mediante webhooks automáticos desde Strapi al publicar o editar obras.
- **Integraciones:** Stripe Checkout con cálculo dinámico de impuestos (21% IVA comunitario vs. 0% exportación extra-UE) y emails transaccionales con Resend.
- **Infraestructura & CI/CD:** Despliegue continuo con GitHub Actions compilando a GHCR y orquestación en VPS con Dokploy tras Traefik con SSL automático.

#### 🎬 [jonathangarciaherrera.com](https://jonathangarciaherrera.com) — *Astro SSG & Cinematic Streaming Platform*
Plataforma audiovisual y portfolio cinematográfico de autor diseñado con foco en narrativa visual e hiper-rendimiento edge.
- **Stack:** Astro 5+, React 19, Sanity CMS (GROQ), Cloudflare R2, Cloudflare Pages, GSAP 3, Tailwind CSS v4.
- **Rendimiento Edge:** Arquitectura de islas interactivas sobre HTML estático puro (SSG) con hidratación selectiva de micro-animaciones (GSAP / Lenis / Framer Motion).
- **Zero-Egress Media Streaming:** Distribución multimedia con Cloudflare R2 y reproductor de vídeo propio, evitando publicidad y sobrecostes de transferencia.
- **Headless Content Hub:** Catálogo y taxonomías audiovisuales gestionadas en Sanity Studio y sincronizadas en tiempo de compilación.

#### ⚡ [WebP Image Converter & Compressor](https://image-compressor-fernandojavierps-projects.vercel.app/)
Herramienta web client-side desarrollada para el equipo editorial de la galería para optimizar el flujo de catalogación previo a la subida al CMS y Cloudflare R2.
- **Stack:** JavaScript nativo, Canvas API, Web Workers, PDF.js, FileReader API, JSZip, UTIF.js, Glassmorphism UI.
- **Procesamiento en el Navegador:** Conversión y compresión a WebP (90% calidad) multiformato por lotes (incluyendo PDF multipágina, TIFF y HEIC) ejecutada 100% en el cliente sin transferir datos a servidores externos, garantizando privacidad total y cero coste de backend.

#### 🖼️ [danadiesendorf.com](https://danadiesendorf.com) — *Galería Artística Minimalista*
Portafolio de arte enfocado en una experiencia visual de alta fidelidad e interactiva para la exposición digital de obras físicas con diseño limpio y curado.

---

### 📬 Conectemos
Abierto a oportunidades en ingeniería web y soporte técnico experto:
- 💼 **LinkedIn**: [fernando-patete-gonzalez](https://www.linkedin.com/in/fernando-patete-gonzalez)
- 📧 **Email**: [fpatetegonzalez@gmail.com](mailto:fpatetegonzalez@gmail.com)
- 📍 **Ubicación**: Barcelona, España
