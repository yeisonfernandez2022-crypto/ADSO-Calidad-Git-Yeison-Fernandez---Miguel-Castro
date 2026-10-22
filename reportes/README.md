# 📊 Módulo de Reportes

*Rama:* feature/modulo-reportes
*Aprendiz B:* Miguel Castro (@angelcastro09-max)

Módulo que genera reportes de los usuarios registrados en la aplicación.

## ⚙️ Funciones

| Función | Descripción |
| --- | --- |
| generarReporte(usuarios) | Devuelve un objeto con el *total* de usuarios recibidos. |
| conteoPorDominio(usuarios) | Agrupa los usuarios por *dominio de correo* (lo que va después del @). Ignora correos sin dominio. |

## 💻 Ejemplo de uso

```js
const { generarReporte, conteoPorDominio } = require("./reportes/reportes.js");

generarReporte([{ correo: "a@x.com" }]);
// → { total: 1 }

const usuarios = [
  { nombre: "Yeison", correo: "yeisonfernandez2022@gmail.com" },
  { nombre: "Miguel", correo: "mc560375@gmail.com" },
  { nombre: "Ana",    correo: "anita@gmail.com" }
];

conteoPorDominio(usuarios);
// → { "gmail.com": 2, "outlook.com": 1 }

✅ Reglas de negocio
1. generarReporte cuenta todos los usuarios que llegan en la lista.
2. conteoPorDominio agrupa por lo que va después del @ en el correo.
3. Los correos inválidos (sin @) se ignoran para no romper el conteo.