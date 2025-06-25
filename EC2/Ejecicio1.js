let alto = prompt("Ingresa el alto:");
let ancho = prompt("Ingresa el ancho:");

alto = parseInt(alto);
ancho = parseInt(ancho);

for (let i = 0; i < alto; i++) {
  let linea = "";
  for (let j = 0; j < ancho; j++) {
    if (i === 0 || i === alto - 1 || j === 0 || j === ancho - 1) {
      linea += "*";
    } else {
      linea += " "; 
    }
  }
  console.log(linea);
}
