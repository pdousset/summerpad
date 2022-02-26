//referencias a paginas
let paginaBienvenida = document.getElementById('pantallaBienvenida')
let paginaFormulario = document.getElementById('pantallaFormulario')
let paginaListado = document.getElementById('pantallaListado')
let paginaDetalle = document.getElementById('pantallaDetalle')
let formDescipcion = document.getElementById('formDescripcion')
let formTitulo = document.getElementById('formTitulo')
let formCategoria = document.getElementById('formCategoria')
let formAgregar = document.getElementById('formAgregar')
let listado = document.getElementById('listado')
let agregarProducto = document.getElementById('agregarProducto')
let agregarProductoListado = document.getElementById('agregarProductoListado')
let detalleImg = document.getElementById('detalleImg')
let detalleTitulo = document.getElementById('detalleTitulo')
let detalleDescripcion = document.getElementById('detalleDescripcion')
let cerrarDetalle = document.getElementById(`cerrarDetalle`)
//referencias de boton


let agregame = ()=>{
    pantallaBienvenida.style.display = 'none'
    pantallaListado.style.display = 'none'
    pantallaFormulario.style.display ='block'
}
agregarProductoListado.addEventListener('click', agregame)
agregarProducto.addEventListener('click', agregame);

let mostrarListado=()=>{
    pantallaFormulario.style.display = 'none'
    pantallaListado.style.display = 'block'
    pantallaBienvenida.style.display = 'none'

}
let mostrarDetalle=(titulo, categoria, descripcion)=>{
    pantallaDetalle.style.display = 'block'
    detalleTitulo.innerHTML = titulo
    detalleDescripcion.innerHTML = descripcion
    detalleImg.setAttribute('src', `${categoria}`)
    pantallaListado.style.display = 'none'

}
cerrarDetalle.addEventListener('click', ()=>{
    pantallaListado.style.display = 'block'
    pantallaDetalle.style.display = 'none'

})
formAgregar.addEventListener('click', ()=>{
    let categoria = formCategoria.value
    let titulo = formTitulo.value
    let descripcion = formDescripcion.value
    let modelo = `<li class="list-group-item"><img src="${categoria}" alt="${titulo}"> <p>${titulo}</p> <button onclick="mostrarDetalle('${titulo}', '${categoria}', '${descripcion}')"><img src="../../images/iconos/next.png" alt=""></button></li>`;
    if(categoria != 'Categoria' && titulo!='' && descripcion !=''){
        
    
    listado.innerHTML += modelo
    formTitulo.value = ''
    formCategoria.value = ''
    formDescripcion.value = ''
    mostrarListado()

}else{
    alert('Hay campos vacios')
}
})