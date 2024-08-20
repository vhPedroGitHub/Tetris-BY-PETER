import { Grilla } from "./Clases/Grillas";
import { obtenerFigura } from "./functions/generarFigura";
import { grillasOcupadas } from "./functions/grillasOcupadas";
import { eliminarFilaOcupada } from "./functions/eliminarFilaOcupada";

// canvas
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// variables
const DIMENSIONS_GRILLA = 40;
const DIMENSIONS_CUADRO = 40;
let velocidadX = 0;
let velocidadY = 0;

let velocidadYBajada = 1;

canvas.width = 600;
canvas.height = 600;

let figuraActual = null;
let figuraSiguiente = null;

const figuras = ["cuadrado", "varilla", "T", "lPequena", "lGrande"];

// Dibujamos las grillas y las agregamos en un arrays
let grillas = [];
let grillasOcupadasArray = [];

for (let y = 0; y < 15; y++) {
  for (let x = 0; x < 15; x++) {
    grillas.push(new Grilla(x, y, "green"));
  }
}

figuraActual = obtenerFigura(figuras);
figuraSiguiente = obtenerFigura(figuras);

// Agregar evento de tecla presionada al documento
function manejarTeclaPresionada(event) {
  // Verificar la tecla presionada
  switch (event.code) {
    case "ArrowDown":
      velocidadY = 1;
      break;
    case "ArrowLeft":
      velocidadX = -1;
      break;
    case "ArrowRight":
      velocidadX = 1;
      break;
    case "Space":
      figuraActual.rotarDibujo();
      break;

    default:
      // Ignorar otras teclas
      break;
  }
}
document.addEventListener("keydown", manejarTeclaPresionada);

function detectarEscape(event) {
  // Verificamos si la tecla presionada es Escape
  if (event.key === "Escape" || event.keyCode === 27) {
    velocidadYBajada = velocidadYBajada == 0 ? 1 : 0;
  }
}

// Agregamos un listener para el evento keydown
document.addEventListener("keydown", detectarEscape);

// bucle del juego
function loop() {
  // actualizando los datos
  figuraActual.update(velocidadX, velocidadY);

  // dibujando los elementos en la pantalla
  ctx.fillStyle = "#242424";
  ctx.fillRect(0, 0, 600, 600);

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

  velocidadX = 0;
  velocidadY = 0;

  if (figuraActual.isFinish(grillasOcupadasArray, casillasADibujar)) {
    figuraActual = figuraSiguiente;
    figuraSiguiente = obtenerFigura(figuras);

    grillasOcupadas(grillas, casillasADibujar);
    let indice = 14;
    while (indice != 0) {
      grillasOcupadasArray = grillas.filter((element) => element.ocupado);
      if (!eliminarFilaOcupada(indice, grillasOcupadasArray, grillas)) {
        indice--;
      }
    }

    grillasOcupadasArray = grillas.filter((element) => element.ocupado);
  }

  requestAnimationFrame(loop);
}

loop();

setInterval(() => figuraActual.update(0, velocidadYBajada), 2000);
