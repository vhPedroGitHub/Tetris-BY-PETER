import { Figura } from "./Figuras";

export class Cuadrado extends Figura {
  constructor(posX, posY, colum, filaRight, filaLeft) {
    super(posX, posY, colum, filaRight, filaLeft);

    this.count = [0, 0, 0, 3];
    this.dibujado = [
      [[posX, posY], this.count[0], 3],
      [[posX, posY + 1], this.count[1], 3],
      [[posX, posY + 2], this.count[2], 3],
      [[posX, posY], this.count[3], 3],
    ];
  }

  update(velocidadX, velocidadY) {
    super.update(velocidadX, velocidadY);
    this.actualizarDibujo();
  }

  actualizarDibujo() {
    this.dibujado = [
      [[this.posX, this.posY], this.count[0], 3],
      [[this.posX, this.posY + 1], this.count[1], 3],
      [[this.posX, this.posY + 2], this.count[2], 3],
      [[this.posX, this.posY], this.count[3], 3],
    ];
  }

  rotarDibujo() {}
}
