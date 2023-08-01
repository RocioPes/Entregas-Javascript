function bienvenida () {
    console.log("Bienvenido a tienda online")
}


bienvenida()

/*PRODUCTOS*/

function Producto (denominacion, precio,gramaje,stock) {
    this.denominacion= denominacion;
    this.precio = precio,
    this.gramaje = gramaje, 
    this.stock = stock;
}

const harina = new Producto ("harina 000",300,1000,50)
const galletitas = new Producto ("galletitas",400,250, 25)
const aceite = new Producto ("aceite", 850, 900, 15)
const azucar = new Producto ("azucar",600, 1000, 20)
const fideos = new Producto ("fideos", 350, 500, 18)

let listadoProductos = [harina, galletitas, aceite, azucar, fideos]


/*FILTRADO Y AGREGADO DE NUEVOS PRODUCTOS*/

function filtrarProducto () {
    let productoBuscado = prompt ("Ingrese el producto que desee buscar")
    let resultadoBusqueda = listadoProductos.filter ((producto) => producto.denominacion.includes(productoBuscado))

    if (resultadoBusqueda.length > 0) {
console.table(resultadoBusqueda)
    }

    else {
        alert("no se encontro " + productoBuscado)
    }
}

filtrarProducto();


function agregarProducto (){
    let denominacion = prompt("Ingrese nombre del producto")
    let precio = parseInt(prompt("Ingrese el precio del producto"))
    let gramaje = parseInt(prompt("Ingrese el gramaje del producto en miligramos o mililitros"))
    let stock = parseInt(prompt ("Ingresa cuantas unidades hay disponible en stock"))
    

    if (denominacion=== null || isNaN(precio) || isNaN(gramaje) || isNaN(stock)){
        alert("por favor ingrese valores válidos")
        return 
    }
    let producto = new Producto (denominacion, precio, gramaje, stock)

    listadoProductos.push(producto)
    console.table(listadoProductos)
}

agregarProducto();



