import { Figura } from "./Figuras";

export class Varilla extends Figura {
  constructor(posX, posY, colum, filaRight, filaLeft) {
    super(posX, posY, colum, filaRight, filaLeft);

    this.count = [3];
    this.dibujado = [[[posX, posY], this.count[0], 5]];
  }

  update(velocidadX, velocidadY) {
    super.update(velocidadX, velocidadY);
    this.actualizarDibujo();
  }

  actualizarDibujo() {
    this.dibujado = [[[this.posX, this.posY], this.count[0], 5]];
  }

  rotarDibujo() {
    this.count = this.count.map((element) => {
      element++;
      return element > 3 ? 0 : element;
    });
    this.actualizarDibujo;
  }
}
