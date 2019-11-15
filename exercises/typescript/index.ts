enum Color {
  Rojo = "Rojo",
  Verde = "Verda"
}

interface Rectangulo {
  ancho: number;
  alto: number;
  color?: Color;
}

let Rectangulo = {
  ancho: 4,
  alto: 6
};

let rect: Rectangulo = {
  ancho: 5,
  alto: 5,
  color: Color.Rojo
};

function area(r: Rectangulo): number {
  return r.alto * r.ancho;
}

const areaReact = area(rect);
console.log(areaReact);

rect.toString = function() {
  return this.color ? `Un rectangulo ${this.color}` : `Un rectangulo`;
};

console.log(rect.toString());
