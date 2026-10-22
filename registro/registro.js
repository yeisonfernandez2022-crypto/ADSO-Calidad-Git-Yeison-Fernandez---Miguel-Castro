/**
 * Módulo de registro de usuarios
 * Aprendiz A: Yeison Fernandez (@yeisonfernandez2022)
 */

const usuarios = [];

function validarDatos(nombre, correo) {
  if (!nombre || !nombre.trim()) {
    throw new Error("El nombre es obligatorio");
  }

  const correoLimpio = correo.trim();
  if (
    !correoLimpio.includes("@") ||
    correoLimpio.startsWith("@") ||
    correoLimpio.endsWith("@")
  ) {
    throw new Error('El correo "' + correoLimpio + '" no es válido');
  }

  return correoLimpio;
}

function registrarUsuario(nombre, correo) {
  const correoValido = validarDatos(nombre, correo).toLowerCase();

  for (const u of usuarios) {
    if (u.correo === correoValido) {
      return false; // correo duplicado: no se registra
    }
  }

  const usuario = { nombre: nombre.trim(), correo: correoValido };
  usuarios.push(usuario);
  return true;
}

module.exports = { registrarUsuario, usuarios };
