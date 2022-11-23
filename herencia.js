const Aberturas= require("./Aberturas");
const Ventana = require("./Ventana");
const Puerta = require("./Puerta");

const unaAbertura=new Aberturas(2, 1, "aluminio", 40);
const unaVentana= new Ventana(1.5, 2, "aluminio", 90, true);
const unaPuerta = new Puerta (2.5, 1, "madera", 1, true);

// verificando regla ES UN
console.log(unaPuerta instanceof Aberturas);

unaPuerta.abrir();
unaPuerta.cerrar();
unaPuerta.entornar();
unaPuerta.deQueMaterialSos();
unaPuerta.tipoDePicaporte();

unaVentana.abrir();
unaVentana.cerrar();
unaVentana.entornar();
unaVentana.deQueMaterialSos();
unaVentana.porcentajeDeApertura();

unaAbertura.abrir();
unaAbertura.cerrar();
unaAbertura.entornar();