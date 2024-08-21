import { Figura } from "./Figuras";

export class LPequena extends Figura {
  constructor(posX, posY, colum, filaRight, filaLeft) {
    super(posX, posY, colum, filaRight, filaLeft);

    this.count = [3, 2];
    this.dibujado = [
      [[posX, posY], this.count[0], 2],
      [[posX, posY], this.count[1], 2],
    ];
  }

  update(velocidadX, velocidadY, HEIGHT_GAME, WIDTH_GAME) {
    super.update(velocidadX, velocidadY, HEIGHT_GAME, WIDTH_GAME);
    this.actualizarDibujo();
  }

  actualizarDibujo() {
    this.dibujado = [
      [[this.posX, this.posY], this.count[0], 2],
      [[this.posX, this.posY], this.count[1], 2],
    ];
  }

  rotarDibujo() {
    this.count = this.count.map((element) => {
      element++;
      return element > 3 ? 0 : element;
    });
    this.actualizarDibujo;
  }
}
