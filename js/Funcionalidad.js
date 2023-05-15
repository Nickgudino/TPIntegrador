//Creando funcion comprar entradas
function calPrecioFinal(){
    let cantEnt= document.getElementById("cantEntradas").value;
    let PorDesc= document.getElementById("porcDescuento").value;

    let descuento=(cantEnt*1000) * (PorDesc/100);
    let precioTotal=(cantEnt*1000) - descuento;

    document.getElementById("pTotal").value=precioTotal;
    


}