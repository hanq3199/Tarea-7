let toda_la_banda=['Diana','Monica','Maria','Brendy'];
let contenedor=document.querySelector("#principal");

//Primer Requerimiento
let html1="";
toda_la_banda.forEach(nombre=>{
html1+=`<li>${nombre}</li>`
console.log(nombre);
})


contenedor.innerHTML=`<lu>${html1}</lu>`

//Segundo Requerimiento
let html2="";
let copia1_toda_la_banda=toda_la_banda.slice();
let copia2_toda_la_banda=copia1_toda_la_banda.splice(1,1);
console.log(copia1_toda_la_banda);

//Tercer Requerimiento
let eliminar_brendy=copia1_toda_la_banda.pop();
console.log(copia1_toda_la_banda);

//Cuarto Requerimiento
let anadiraJose=copia1_toda_la_banda.unshift('Jose')
console.log(copia1_toda_la_banda);

//Quinto Requerimiento
let anadirmiNombre=copia1_toda_la_banda.push('Helton');
console.log(copia1_toda_la_banda);

//Sexto Requerimiento
let Diana=copia1_toda_la_banda[1];
console.log(Diana);

//Septimo Requerimiento
let copia3_tola_la_banda=toda_la_banda.slice();
let copia4_toda_la_banda=copia3_tola_la_banda.splice(0,1);
let copia5_toda_la_banda=copia3_tola_la_banda.splice(2,1);
console.log(copia3_tola_la_banda);

//Octavo Requrimiento
function obtenerindice(cadena){
    let indice=copia3_tola_la_banda.indexOf(cadena);
    let resuldado=0;
    if(indice==null){
resultado=-1;
    }else{resultado=indice;}
    return resultado;
}

console.log(obtenerindice("Monica"));
console.log(obtenerindice("Juana"));

