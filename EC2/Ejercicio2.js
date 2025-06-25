function calcularSueldo() {
    const pagoHora = 30;
    const pagoHoraExtra = 31;
    const descuentoFalta = 30;
  
    let horas = parseInt(prompt("Ingrese la cantidad de horas normales trabajadas:"));
    let horasExtras = parseInt(prompt("Ingrese la cantidad de horas extras trabajadas:"));
    let faltas = parseInt(prompt("Ingrese la cantidad de faltas:"));
  
    const sueldo = (horas * pagoHora) + (horasExtras * pagoHoraExtra) - (faltas * descuentoFalta);
  
  alert('El sueldo total a pagar es: S/. ' + sueldo);
  
  }
  
  calcularSueldo()