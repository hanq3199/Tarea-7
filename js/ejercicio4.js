function ObtenerDatos(){
let arreglo=[5,5,5];
let suma=0;
for(i=0;i<arreglo.length;i++){
    
   
  suma+=arreglo[i]; 
}
console.log(suma/arreglo.length);
let contenedor=document.querySelector("#principal");
contenedor.innerHTML=`<h4>${suma/arreglo.length}</h4>`;
}