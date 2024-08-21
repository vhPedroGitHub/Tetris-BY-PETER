import { Grilla } from "./Clases/Grillas";
import { obtenerFigura } from "./functions/generarFigura";
import { grillasOcupadas } from "./functions/grillasOcupadas";
import { eliminarFilaOcupada } from "./functions/eliminarFilaOcupada";
import {
  manejarTeclaPresionada,
  detectarEscape,
  velocidades,
} from "./functions/modificarVelocidades";
import {
  ajustarDimensiones,
  dimensiones,
} from "./functions/ajustesDeDimensiones";

// canvas
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const figuras = ["cuadrado", "varilla", "T", "lPequena", "lGrande"];
let figuraActual = obtenerFigura(figuras);
let figuraSiguiente = obtenerFigura(figuras);

// Dibujamos las grillas y las agregamos en un arrays
let grillas = [];
let grillasOcupadasArray = [];

for (let y = 0; y < dimensiones.HEIGHT_GAME; y++) {
  for (let x = 0; x < dimensiones.WIDTH_GAME; x++) {
    grillas.push(new Grilla(x, y, "green", false));
  }
}

// agreagadno los eventos al juego
document.addEventListener("keydown", (event) => {
  manejarTeclaPresionada(event, velocidades, figuraActual);
});
document.addEventListener("keydown", (event) => {
  detectarEscape(event, velocidades);
});

// anandiendole funcionalidad a los botones
document
  .getElementById("bt-d")
  .addEventListener("click", () => (velocidades.velocidadY = 1));
document
  .getElementById("bt-r")
  .addEventListener("click", () => (velocidades.velocidadX = 1));
document
  .getElementById("bt-l")
  .addEventListener("click", () => (velocidades.velocidadX = -1));

document
  .getElementById("rotate")
  .addEventListener("click", () => figuraActual.rotarDibujo());

// Añadir un event listener para detectar cambios en el tamaño de la ventana
ajustarDimensiones(dimensiones);
window.addEventListener("resize", () => ajustarDimensiones(dimensiones));

// bucle del juego
function loop() {
  canvas.width = dimensiones.CANVAS_DIMENSION_X;
  canvas.height = dimensiones.CANVAS_DIMENSION_Y;
  // actualizando los datos
  figuraActual.update(
    velocidades.velocidadX,
    velocidades.velocidadY,
    dimensiones.HEIGHT_GAME,
    dimensiones.WIDTH_GAME
  );

  // dibujando los elementos en la pantalla
  ctx.fillStyle = "black";
  ctx.fillRect(
    0,
    0,
    dimensiones.CANVAS_DIMENSION_X,
    dimensiones.CANVAS_DIMENSION_Y
  );

  const casillasADibujar = figuraActual.obtenerCasillasDibujo(
    figuraActual.dibujado
  );

  figuraActual.drawCasillas(
    casillasADibujar,
    "red",
    dimensiones.DIMENSIONS_GRILLA_X,
    dimensiones.DIMENSIONS_GRILLA_Y,
    ctx
  );

  Grilla.drawCasillas(
    grillasOcupadasArray,
    dimensiones.DIMENSIONS_GRILLA_X,
    dimensiones.DIMENSIONS_GRILLA_Y,
    ctx
  );

  grillas.forEach((grilla) =>
    grilla.draw(
      ctx,
      dimensiones.DIMENSIONS_GRILLA_X,
      dimensiones.DIMENSIONS_GRILLA_Y
    )
  );

  velocidades.velocidadX = 0;
  velocidades.velocidadY = 0;

  if (
    figuraActual.isFinish(
      grillasOcupadasArray,
      casillasADibujar,
      dimensiones.HEIGHT_GAME
    )
  ) {
    figuraActual = figuraSiguiente;
    figuraSiguiente = obtenerFigura(figuras);

    grillasOcupadasArray = grillasOcupadas(
      grillas,
      casillasADibujar,
      grillasOcupadasArray
    );

    grillasOcupadasArray = eliminarFilaOcupada(
      dimensiones.HEIGHT_GAME,
      grillasOcupadasArray,
      dimensiones.WIDTH_GAME
    );
  }

  requestAnimationFrame(loop);
}

loop();

setInterval(
  () =>
    figuraActual.update(
      0,
      velocidades.velocidadYBajada,
      dimensiones.HEIGHT_GAME,
      dimensiones.WIDTH_GAME
    ),
  1000
);
