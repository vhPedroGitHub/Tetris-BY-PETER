// Cuadricula
export class Grilla {
  constructor(posX, posY, color, ocupado) {
    this.posX = posX;
    this.posY = posY;
    this.color = color;
    this.ocupado = ocupado;
  }

  draw(ctx, DIMENSIONS_GRILLA) {
    // Establecer el color del borde
    ctx.strokeStyle = "white"; // Color del borde
    // Establecer el grosor del borde
    ctx.lineWidth = 1; // Grosor del borde
    // Dibujar el rectangulo
    ctx.strokeRect(
      this.posX * DIMENSIONS_GRILLA,
      this.posY * DIMENSIONS_GRILLA,
      DIMENSIONS_GRILLA,
      DIMENSIONS_GRILLA
    );
  }

  static drawCasillas(casillas, DIMENSIONS_GRILLA, DIMENSIONS_CUADRO, ctx) {
    casillas.forEach((element) => {
      // Establecer el color de relleno
      ctx.fillStyle = element.color;
      // Dibujar el rectangulo
      ctx.fillRect(
        element.posX * DIMENSIONS_GRILLA,
        element.posY * DIMENSIONS_GRILLA,
        DIMENSIONS_CUADRO,
        DIMENSIONS_CUADRO
      );
    });
  }
}
