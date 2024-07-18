/* En una empresa se asignará un aumento del 20% a todo el personal obrero y un 10% al
personal administrativo. La empresa necesita determinar cuánto es el total de sueldo (por
empleado y por la empresa) que deberá pagar en la próxima nómina.
Al ser consultada por la forma como desean que se presente la salida, la empresa suministra
el siguiente formato de salida, informando que Juan (obrero) actualmente gana $100, Ana
(obrero) gana $120, Lin (administrativo) gana $200, Mary (obrero) gana $50 y Carlos
(administrativo) gana $150:
Juan tendrá un sueldo de $120
Ana tendrá un sueldo de $144
Lin tendrá un sueldo de $220
Mary tendrá un sueldo de $60
Carlos tendrá un sueldo de $165
El total de sueldo que debe pagar la empresa es de $709 */

import CL_empleados from "./CL_empleados.js";
import CL_empresa from "./CL_empresa.js";

let emp1 = new CL_empleados("Juan",1,100);
let emp2 = new CL_empleados("Ana",1,120);
let emp3 = new CL_empleados("Lin",2,200);
let emp4 = new CL_empleados("Mary",1,50);
let emp5 = new CL_empleados("Carlos",2,150);

let empresa = new CL_empresa();

empresa.procesarempleados(emp1);
empresa.procesarempleados(emp2);
empresa.procesarempleados(emp3);
empresa.procesarempleados(emp4);
empresa.procesarempleados(emp5);

let salida = document.getElementById("salida");

salida.innerHTML=`
<br> ${emp1.nombre} tendrá un sueldo de ${emp1.sueldototal()}$
<br> ${emp2.nombre} tendrá un sueldo de ${emp2.sueldototal()}$
<br> ${emp3.nombre} tendrá un sueldo de ${emp3.sueldototal()}$
<br> ${emp4.nombre} tendrá un sueldo de ${emp4.sueldototal()}$
<br> ${emp5.nombre} tendrá un sueldo de ${emp5.sueldototal()}$
<br> El total de sueldo que debe pagar la empresa es de ${empresa.sueldoempresa()}$
`


