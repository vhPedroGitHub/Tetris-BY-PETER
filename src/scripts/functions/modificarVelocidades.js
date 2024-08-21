// creamos un objeto que contiene todas las velocidades
export const velocidades = {
  velocidadX: 0,
  velocidadY: 0,
  velocidadYBajada: 1,
};

// Agregar evento de tecla presionada al documento
export function manejarTeclaPresionada(event, velocidades, figuraActual) {
  // Verificar la tecla presionada
  switch (event.code) {
    case "ArrowDown":
      velocidades.velocidadY = 1;
      break;
    case "ArrowLeft":
      velocidades.velocidadX = -1;
      break;
    case "ArrowRight":
      velocidades.velocidadX = 1;
      break;
    case "Space":
      figuraActual.rotarDibujo();
      break;

    default:
      // Ignorar otras teclas
      break;
  }
}

export function detectarEscape(event, velocidades) {
  // Verificamos si la tecla presionada es Escape
  if (event.key === "Escape" || event.keyCode === 27) {
    velocidades.velocidadYBajada = velocidades.velocidadYBajada == 0 ? 1 : 0;
  }
}
