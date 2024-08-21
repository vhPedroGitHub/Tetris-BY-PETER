// Cuadricula
export class Grilla {
  constructor(posX, posY, color, ocupado) {
    this.posX = posX;
    this.posY = posY;
    this.color = color;
    this.ocupado = ocupado;
  }

  draw(ctx, DIMENSIONS_GRILLA_X, DIMENSIONS_GRILLA_Y) {
    // Establecer el color del borde
    ctx.strokeStyle = "white"; // Color del borde
    // Establecer el grosor del borde
    ctx.lineWidth = 1; // Grosor del borde
    // Dibujar el rectangulo
    ctx.strokeRect(
      this.posX * DIMENSIONS_GRILLA_X,
      this.posY * DIMENSIONS_GRILLA_Y,
      DIMENSIONS_GRILLA_X,
      DIMENSIONS_GRILLA_Y
    );
  }

  static drawCasillas(casillas, DIMENSIONS_GRILLA_X, DIMENSIONS_GRILLA_Y, ctx) {
    casillas.forEach((element) => {
      // Establecer el color de relleno
      ctx.fillStyle = element.color;
      // Dibujar el rectangulo
      ctx.fillRect(
        element.posX * DIMENSIONS_GRILLA_X,
        element.posY * DIMENSIONS_GRILLA_Y,
        DIMENSIONS_GRILLA_X,
        DIMENSIONS_GRILLA_Y
      );
    });
  }
}
