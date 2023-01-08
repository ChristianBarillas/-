// const peticion = new XMLHttpRequest();
// console.log (peticion)
// peticion.open("GET", "texto.tx");
// peticion.send()
// console.log (peticion)



let peticion;
if (window.XMLHttpRequest) peticion = new XMLHttpRequest();
else peticion = new ActiveXObject("Microsoft.XMLHTTP");



//completar request

// peticion.addEvenListner("readystatechange", ()=> {
//     if (peticion.readystate == 4 && peticion.status == 200){
//         console.log(peticion)
//     }
// })


peticion.addEventList("loan", ()=> {
    let respuesta;
    if (peticion.status == 200) respuesta = peticion.response;
    else respuesta = " lo siento no se encontro el recurso"
    console.log (respuesta)
})

peticion.open("GET", "texto.tx");
peticion.send()


console.log (peticion)