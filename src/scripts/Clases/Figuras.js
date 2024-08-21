// Figuras
export class Figura {
  constructor(posX, posY, colum, filaRight, filaLeft) {
    this.posX = posX;
    this.posY = posY;
    this.colum = colum;
    this.filaRight = filaRight;
    this.filaLeft = filaLeft;
    this.drop = ["right", "up", "left", "down"];
    this.inUse = true;
  }

  /* En esta funcion el programa detecta si la figura que esta en juego  
  choca con el final o con algunas de los pisos que han formado las otras figuras*/
  isFinish(grillasOcupadas, casillasADibujar, HEIGHT_GAME) {
    if (this.posY + this.colum >= HEIGHT_GAME - 1) {
      return true;
    } else {
      for (let index = 0; index < casillasADibujar.length; index++) {
        const posX = casillasADibujar[index][0];
        const posY = casillasADibujar[index][1] + 1;
        if (grillasOcupadas.some((e) => e.posX == posX && e.posY == posY)) {
          return true;
        }
      }
    }
  }

  /* Segun la matriz de dibujado obtendremos una array con las casillas a dibujar de la figura */
  obtenerCasillasDibujo(dibujado) {
    this.filaRight = 0;
    this.filaLeft = 0;
    this.colum = 0;

    let casillasADibujar = [];
    dibujado.forEach((element) => {
      const posX = element[0][0];
      const posY = element[0][1];

      if (this.drop[element[1]] == "right") {
        for (let index = 0; index < element[2]; index++) {
          casillasADibujar.push([posX + index, posY]);
          this.filaRight = index;
        }
      } else if (this.drop[element[1]] == "up") {
        for (let index = 0; index < element[2]; index++) {
          casillasADibujar.push([posX, posY - index]);
        }
      } else if (this.drop[element[1]] == "left") {
        for (let index = 0; index < element[2]; index++) {
          casillasADibujar.push([posX - index, posY]);
          this.filaLeft = index;
        }
      } else {
        for (let index = 0; index < element[2]; index++) {
          casillasADibujar.push([posX, posY + index]);
          this.colum = index;
        }
      }
    });
    return casillasADibujar;
  }

  // dibujas las casillas
  drawCasillas(casillas, color, DIMENSIONS_GRILLA_X, DIMENSIONS_GRILLA_Y, ctx) {
    casillas.forEach((element) => {
      // Establecer el color de relleno
      ctx.fillStyle = color;
      // Dibujar el rectangulo
      ctx.fillRect(
        element[0] * DIMENSIONS_GRILLA_X,
        element[1] * DIMENSIONS_GRILLA_Y,
        DIMENSIONS_GRILLA_X,
        DIMENSIONS_GRILLA_Y
      );
    });
  }

  // actualiza los parametros de la figura para dibujarla
  update(velocidadX, velocidadY, HEIGHT_GAME, WIDTH_GAME) {
    this.posX += velocidadX;
    this.posY += velocidadY;
    if (this.posX + this.filaRight >= WIDTH_GAME - 1) {
      this.posX = WIDTH_GAME - 1 - this.filaRight;
    }
    if (this.posX - this.filaLeft <= 0) {
      this.posX = 0 + this.filaLeft;
    }
    if (this.posY + this.colum >= HEIGHT_GAME - 1) {
      this.posY = HEIGHT_GAME - 1 - this.colum;
    }
  }
}
