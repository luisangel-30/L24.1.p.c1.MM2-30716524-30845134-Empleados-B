export default class CL_empleados {
    constructor(nombre, tipo, sueldo){
        this.nombre = nombre;
        this.tipo = tipo;
        this.sueldo =sueldo;
    }
    aumento(){
        if(this.tipo == 1)
            return this.sueldo * 0.20;
        else
        return this.sueldo * 0.10;
    }
    sueldototal(){
        return this.sueldo + this.aumento();
    }
}