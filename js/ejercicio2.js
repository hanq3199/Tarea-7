function ObtenerDatos(){
const categoria1=document.getElementById("categoria").value;
let productos=[
    {
        Categoria:"Cosmeticos",
        Precio:120
    },
    {
        Categoria:"Alimentos",
        Precio:40
    },
    {
        Categoria:"Accesorios",
        Precio:50
    },
    {
        Categoria:"Linea Blanca",
        Precio:200
    },
    {
        Categoria:"Electronicos",
        Precio:1000
    },
    {
        Categoria:"Computo",
        Precio:120
    },
    {
        Categoria:"Ganaderia",
        Precio:300
    },
    {
        Categoria:"Insumos",
        Precio:1555
    },
    {
        Categoria:"Automotriz",
        Precio:150000000
    },
    {
        Categoria:"Telefonia",
        Precio:120000
    }
]
var html="";
let contenedor= document.querySelector("#principal");

let precio=productos.filter(prod=>{
   if(prod.Categoria==categoria1){
    console.log(prod.Precio); 
    html=`${prod.Precio}`
       return prod.Precio;     
   } 
})

contenedor.innerHTML=`<h4>${html}</h4>`;

if(precio.length==0){
    console.log("No Existe esta categoria");
}

}
