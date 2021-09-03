function ObtenerDatos(){
    let dato=document.getElementById("cadena").value;
    
  console.log(dato);
  let separado=dato.split(" ");
  console.log(separado);
  let html="";
  let Mayusculo=[];
    for(var i = 0; i < separado.length; i++) {
        var input = separado[i];
        var lower = input.toLowerCase();
        var firstLetter = lower.slice(0,1);
        var capitalized = lower.replace(firstLetter,firstLetter.toUpperCase());
        var result = capitalized;
        html+=`${capitalized} `;
Mayusculo.push(capitalized);    
       }
  console.log(Mayusculo);
 
  let contenedor=document.querySelector("#principal");
contenedor.innerHTML=`<h4>${html}</h4>`;
  console.log(...Mayusculo);
}