const Aberturas= require ("./Aberturas");

class Ventana extends Aberturas{
    abierta=false;
    constructor(alturaMetros, anchoMetros, material, porcentajeDeLuz, estado){
        super(alturaMetros, anchoMetros, material, porcentajeDeLuz);
        this.estado = estado;
    }
    porcentajeDeApertura(){
        console.log("una hoja abierta y otra cerrada");
    }
}

module.exports=Ventana;