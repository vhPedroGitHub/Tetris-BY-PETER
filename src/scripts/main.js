import { Grilla } from "./Clases/Grillas";
import { obtenerFigura } from "./functions/generarFigura";
import { grillasOcupadas } from "./functions/grillasOcupadas";
import { eliminarFilaOcupada } from "./functions/eliminarFilaOcupada";
import {
  manejarTeclaPresionada,
  detectarEscape,
  velocidades,
} from "./functions/modificarVelocidades";
// canvas
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// variables y declaracion de constantes
const CANVAS_DIMENSION = 400;
const HEIGHT_GAME = 18;
const WIDTH_GAME = 16;
const DIMENSIONS_GRILLA = CANVAS_DIMENSION / HEIGHT_GAME;
const DIMENSIONS_CUADRO = CANVAS_DIMENSION / HEIGHT_GAME;

canvas.width = DIMENSIONS_GRILLA * WIDTH_GAME;
canvas.height = DIMENSIONS_GRILLA * HEIGHT_GAME;

const figuras = ["cuadrado", "varilla", "T", "lPequena", "lGrande"];
let figuraActual = obtenerFigura(figuras);
let figuraSiguiente = obtenerFigura(figuras);

// Dibujamos las grillas y las agregamos en un arrays
let grillas = [];
let grillasOcupadasArray = [];

for (let y = 0; y < HEIGHT_GAME; y++) {
  for (let x = 0; x < WIDTH_GAME; x++) {
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

// bucle del juego
function loop() {
  // actualizando los datos
  figuraActual.update(
    velocidades.velocidadX,
    velocidades.velocidadY,
    HEIGHT_GAME,
    WIDTH_GAME
  );

  // dibujando los elementos en la pantalla
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, CANVAS_DIMENSION, CANVAS_DIMENSION);

  const casillasADibujar = figuraActual.obtenerCasillasDibujo(
    figuraActual.dibujado
  );

  figuraActual.drawCasillas(
    casillasADibujar,
    "red",
    DIMENSIONS_GRILLA,
    DIMENSIONS_CUADRO,
    ctx
  );

  Grilla.drawCasillas(
    grillasOcupadasArray,
    DIMENSIONS_GRILLA,
    DIMENSIONS_CUADRO,
    ctx
  );

  grillas.forEach((grilla) => grilla.draw(ctx, DIMENSIONS_GRILLA));

  velocidades.velocidadX = 0;
  velocidades.velocidadY = 0;

  if (
    figuraActual.isFinish(grillasOcupadasArray, casillasADibujar, HEIGHT_GAME)
  ) {
    figuraActual = figuraSiguiente;
    figuraSiguiente = obtenerFigura(figuras);

    grillasOcupadasArray = grillasOcupadas(
      grillas,
      casillasADibujar,
      grillasOcupadasArray
    );

    grillasOcupadasArray = eliminarFilaOcupada(
      HEIGHT_GAME,
      grillasOcupadasArray,
      WIDTH_GAME
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
      HEIGHT_GAME,
      WIDTH_GAME
    ),
  1000
);
