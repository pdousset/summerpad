//Botones de acciones
let accionPagina1 = document.getElementById("accionPagina1")
let accionPagina2 = document.getElementById("accionPagina2")
// referencias de paginas
let paginaUno = document.getElementById('paginaUno')
let paginaDos = document.getElementById('paginaDos')
// Funciones click
accionPagina1.addEventListener('click', ()=>{
    console.log("ouch soy el btn 1 y me apretaste")
    paginaUno.style.display ='none'
    paginaDos.style.display = 'block'
})
accionPagina2.addEventListener('click', ()=>{
    paginaDos.style.display = 'none'
    paginaUno.style.display ='block'
    console.log("ouch soy el btn 2 y me apretaste")
})
