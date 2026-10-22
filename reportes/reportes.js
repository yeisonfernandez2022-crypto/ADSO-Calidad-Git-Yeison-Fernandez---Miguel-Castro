/**
 * Módulo de reportes de usuarios
 * Aprendiz B: Miguel Castro (@angelcastro09-max)
 */

function generarReporte(usuarios) {
  return { total: usuarios.length };
}

function conteoPorDominio(usuarios) {
  const conteo = {};
  for (const u of usuarios) {
     if (!u.correo || !u.correo.includes("@")) {
      continue; // evita error con correos inválidos
    }
    const dominio = u.correo.split("@")[1];
    conteo[dominio] = (conteo[dominio] || 0) + 1;
  }
  return conteo;
}

module.exports = { generarReporte };