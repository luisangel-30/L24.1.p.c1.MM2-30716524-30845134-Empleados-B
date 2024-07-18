export default class CL_empresa {
    constructor(){
        this.acumsueldo = 0.0;
    }
    procesarempleados(emp){
        this.acumsueldo += emp.sueldototal();
    }
    sueldoempresa(){
        return this.acumsueldo;
    }
    
}

