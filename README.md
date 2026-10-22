# ADSO-Calidad-Git-Yeison-Fernandez---Miguel-Castro

Proyecto de práctica de **control de versiones con Git y GitHub** del programa
ADSO (Análisis y Desarrollo de Software).

## 👥 Equipo

| Rol             | Aprendiz        | Usuario GitHub        |
| --------------- | --------------- | --------------------- |
| Desarrollador A | Yeison Fernandez | `@yeisonfernandez2022` |
| Desarrollador B | Miguel Castro   | `@angelcastro09-max`  |

## 🌿 Estrategia de ramas

- `main` → rama principal, base de los Pull Requests.
- `feature/modulo-registro` → trabajo del Aprendiz A (módulo de registro).
- `feature/modulo-reportes` → trabajo del Aprendiz B (módulo de reportes).

## ✅ Convenciones del equipo

- **Commits convencionales:**
  - `feat:` nueva funcionalidad
  - `fix:` corrección de errores
  - `docs:` documentación
  - `chore:` configuración y tareas de mantenimiento
- **Commits atómicos:** un commit = un cambio concreto y funcional.
- El `.gitignore` excluye de forma estricta logs, binarios y archivos `.env`
  (secretos/credenciales nunca van al repositorio).

## 🧾 Módulo de Registro (rama `feature/modulo-registro`)

> Aprendiz A: Yeison Fernandez (`@yeisonfernandez2022`)

- Permite registrar usuarios con validación de nombre y correo.
- Normaliza los correos a minúsculas y **rechaza correos duplicados**.
- Código ubicado en `registro/` (función `registrarUsuario`). Más detalle en `registro/README.md`.

## 🎯 Fases de la práctica

1. Configuración del repositorio central y exclusiones (`.gitignore`).
2. Trabajo por ramas de calidad (feature branches, mínimo 3 commits atómicos por rama).
3. Pull Request, code review (rol SQA) y resolución de conflictos.
