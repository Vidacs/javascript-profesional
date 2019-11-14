let muted: boolean;
muted = false;

let age = 6;
let numerador: number = 24;
let denominador: number = age;
let resultado = numerador / denominador;

let nombre: string = "Vidacs";
let saludo = `Hola, me llamo ${nombre}`;

// Arrays
let people: string[] = [];
people = ["isable", "nicole", "raul"];

let peopleAndNumbers: Array<string | number> = [];
peopleAndNumbers.push("Vidacs");

//enum
enum Color {
  Rojo = "Rojo",
  Verde = "Verde",
  Azul = "Azul",
  Amarillo = "Amarillo",
  Violeta = "Violeta"
}

let colorFavorite: Color = Color.Rojo;
console.log(`Mi color favorito es ${colorFavorite}`);

//Any
let comodin: any = "Joker";
comodin = { type: "Wildcard" };

//object
let someObject: object = { type: "Wildcard" };
