function agregarHttp(url) {
    return "http://" + url
}

function procesar(array,fun){
    return array.map(fun)
}
console.log(procesar(["www.google.com","www.yahoo.com"], agregarHttp));


function procesar(array,fun){
    let arrayNuevo = []
    for (let i = 0; i < array.length; i++) {
        arrayNuevo.push (fun([i]))
    }
    return arrayNuevo
}