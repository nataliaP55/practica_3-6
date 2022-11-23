const Aberturas = require("./Aberturas");

class Puerta extends Aberturas{
    blindada=false;
    constructor(alturaMetros, anchoMetros, material, porcentajeDeLuz, blindada){
        super(alturaMetros, anchoMetros, material, porcentajeDeLuz);
        this.blindada = blindada;
    }

    tipoDePicaporte(){
        console.log("magnético");
    }


}

module.exports= Puerta;