/**
 * Módulo de registro de usuarios
 * Aprendiz A: Yeison Fernandez (@yeisonfernandez2022)
 */

const usuarios = [];

function registrarUsuario(nombre, correo) {
  const usuario = { nombre: nombre, correo: correo };
  usuarios.push(usuario);
  return true;
}

module.exports = { registrarUsuario, usuarios };
