/* En este modulo crearemos un objeto el cual contendra las dimensiones de los dibujos 
y una funcion que detecte cuando se ajusta el tamano de la pantalla, para ajustar los 
tamanos y hacer un diseno responsivo*/

export const dimensiones = {
  CANVAS_DIMENSION_X: 500,
  CANVAS_DIMENSION_Y: 400,
  HEIGHT_GAME: 18,
  WIDTH_GAME: 16,
  DIMENSIONS_GRILLA_X: 500 / 16,
  DIMENSIONS_GRILLA_Y: 400 / 18,
};

// Función para aplicar estilos según el tamaño de la ventana
export function ajustarDimensiones(dimensiones) {
  const anchoVentana = window.innerWidth;
  const altoVentana = window.innerHeight;

  if (anchoVentana < 600) {
    dimensiones.CANVAS_DIMENSION_X = anchoVentana - 50;
    dimensiones.CANVAS_DIMENSION_Y = altoVentana - 200;
    dimensiones.DIMENSIONS_GRILLA_X =
      dimensiones.CANVAS_DIMENSION_X / dimensiones.WIDTH_GAME;
    dimensiones.DIMENSIONS_GRILLA_Y =
      dimensiones.CANVAS_DIMENSION_Y / dimensiones.HEIGHT_GAME;
  } else {
    dimensiones.CANVAS_DIMENSION_X = 400;
    dimensiones.CANVAS_DIMENSION_Y = 400;
    dimensiones.DIMENSIONS_GRILLA_X =
      dimensiones.CANVAS_DIMENSION_X / dimensiones.WIDTH_GAME;
    dimensiones.DIMENSIONS_GRILLA_Y =
      dimensiones.CANVAS_DIMENSION_Y / dimensiones.HEIGHT_GAME;
  }
}
