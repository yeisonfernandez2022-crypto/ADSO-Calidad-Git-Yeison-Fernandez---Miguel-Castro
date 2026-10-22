# 🧾 Módulo de Registro

**Rama:** `feature/modulo-registro`
**Aprendiz A:** Yeison Fernandez (@yeisonfernandez2022)

Módulo que gestiona el registro de usuarios con validación de datos y
control de correos duplicados.

## ⚙️ Funciones

| Función | Descripción |
| --- | --- |
| `registrarUsuario(nombre, correo)` | Valida y agrega un usuario. Devuelve `true` si registró, `false` si el correo ya existía. Lanza `Error` si el nombre está vacío o el correo es inválido. |

## 💻 Ejemplo de uso

```js
const { registrarUsuario, usuarios } = require("./registro/registro.js");

registrarUsuario("Yeison", "yeisonfernandez2022@gmail.com"); // true  → registrado
registrarUsuario("Yeison", "YEISONFERNANDEZ2022@GMAIL.COM"); // false → duplicado
registrarUsuario("", "x@y.com"); // Error → "El nombre es obligatorio"
registrarUsuario("Ana", "sin-arroba"); // Error → correo inválido
```

## ✅ Reglas de negocio

1. El nombre es obligatorio (no vacío ni espacios).
2. El correo debe tener formato `usuario@dominio`.
3. Los correos se normalizan a minúsculas y **no se permiten duplicados**.
