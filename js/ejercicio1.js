const arreglo=[25,-2,1,4,5,-8];
const nuevoarreglo=arreglo.map(arr=> {
    if(arr<1){
        return arr;}else
        {return Math.sqrt(arr);}
     } )
 console.log(nuevoarreglo); 
 let html="";
 const cophtml=nuevoarreglo.map(arr=>{html+=`<li>${arr}</li>`});
 let html2=`<ul>${html}</ul>`;

 let contenedor=document.querySelector("#Principal");
 contenedor.innerHTML=html2;