function buscarPar(arreglo,numero){
    
    let nuevoarreglo;
    for(i=0;i<arreglo.length;i++){
       for(j=0;j<arreglo.length;j++){
           var suma=arreglo[i]+arreglo[j];
           if(suma==numero){
nuevoarreglo=[arreglo[i],arreglo[j]];
i=arreglo.length;
           } 
    }
}
return nuevoarreglo;
}

let prueba=buscarPar([2,8,5,6,14,500],514);
console.log(prueba);
let contenedor=document.querySelector("#principal");
contenedor.innerHTML=`<h4>[${prueba}]</h4>`;