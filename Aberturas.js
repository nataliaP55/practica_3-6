class Aberturas{
    //estados
    /* abierta=true;
    cerrada=false;
    entornada="por def"; */
    alturaMetros="por def";
    anchoMetros= "x def"
    material="por def";
    porcentajeDeLuz="X def";

    /**
     * inicializa un objeto Abertura
     * @param {number} alturaMetros .
     * @param {number} anchoMetros .
     * @param {string} material 
     * @param {numero} porcentajeDeLuz porcentaje
     */
    constructor(alturaMetros, anchoMetros, material, porcentajeDeLuz){
        this.alturaMetros= alturaMetros;
        this.anchoMetros=anchoMetros;
        this.material=material;
        this.porcentajeDeLuz=porcentajeDeLuz;
    }

    deQueMaterialSos(){
        console.log(this.material);
    }
    // comportamientos

    abrir(){
        console.log("abierta");
    }

    cerrar(){
        console.log("cerrada");
    }

    entornar(){
        console.log("entornada");
    }

}

module.exports= Aberturas;
