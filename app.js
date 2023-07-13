

 const entradaGeneral = 1200
 const entradaMenores = 800
 const entradaJubilado= 600



 function ingreso (){
    alert("Bienvenido a Cinemark")
    let nombreUsuario = prompt("Por favor ingrese su nombre")
    let apellidoUsuario = prompt ("Ingrese su apellido")
    
    console.log ("Bienvenido "+nombreUsuario+ " " + apellidoUsuario)
 }

 ingreso();

 
let seleccionPelicula = (prompt(`Indica el número que corresponde a la pelicula que te gustaría ver:
 1: Flash
 2: Superman 
 3: Doctor Strange
 4: Iron Man

 `))



 switch(seleccionPelicula) {
    case "1":
        console.log (`Flash se proyecta a las 18 hs / 20 hs / 22 hs`);
        break;
    case "2":
        console.log(`Superman se proyecta a las 16 hs / 21 hs / 23 hs`);
        break;
    case "3":
        console.log (`Doctor Strange se proyecta a las 17 hs / 19 hs / 21 hs`);
        break;
    case "4":
        console.log(`Iron Man se proyecta a las 19 hs / 21 hs / 23 hs`);
        break;
    default: alert("No has seleccionado ninguna pelicula"); 
    break;
 }



let cantidadEntradas = Number(prompt("¿Cuántas entradas vas a llevar?"))

let edad = Number(prompt("Ingrese su edad"))

console.log (`Cantidad de entradas: `+ cantidadEntradas)
if (edad <= 10){
    let total1 = cantidadEntradas * entradaMenores
    console.log(`El total de tu compra es de: $`+ total1 )
}
 
else if (edad > 11 || edad <=64 ){
    let total2 = cantidadEntradas * entradaGeneral
    console.log (`El total de tu compra es de: $` + total2)}

else {
    let total3= cantidadEntradas * entradaJubilado
    console.log(`El total de tu compra es de: $`+ total3)
}   

function mensajeFinal () {
console.log( `Gracias por elegirnos esperamos que lo disfrutes`)
}

mensajeFinal();  