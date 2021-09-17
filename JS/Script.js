/* BARRA DE NAVEGACIÓN */

addEventListener('DOMContentLoaded', () => {
    const btn_menu = document.querySelector('.btn_menu')
    if(btn_menu){
        btn_menu.addEventListener('click', () => {
            const menu_items = document.querySelector('.menu_items')
            menu_items.classList.toggle('showMenu')
        })
    }
})

/* Boton de regresar al principio - GOTOP */

window.onscroll=function(){
    if(document.documentElement.scrollTop > 100){
        document.querySelector('.go-top-container')
        .classList.add('showGoTop');
    }
    else{
        document.querySelector('.go-top-container')
        .classList.remove('showGoTop');
    }
}

document.querySelector('.go-top-container').addEventListener('click', () =>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}); 


/* Data Table */

'use strict';

let productos = [];


class IngrProducto{
	constructor(codigo,nombre,precio){
		this.codigo = codigo;
		this.nombre = nombre;
		this.precio = precio;
	}
}

// Funcion para validar los campos

function ValidarFields() {

	if(document.getElementById('codigo').value == ""){
		alert(' ¡ ERROR ! Debes ingresar el código del producto.');
		return false;
	}

	if(document.getElementById('nombre').value == ""){
		alert(' ¡ ERROR ! Debes ingresar el nombre del producto.');
		return false;
	}

	if(document.getElementById('precio').value == ""){
		alert(' ¡ ERROR ! Debes ingresar el precio del producto.');
		return false;
	}

}

// Funcion para poblar los campos

function addRecord(){

	let codigo = document.getElementById('codigo').value;
	let nombre = document.getElementById('nombre').value;
	let precio = document.getElementById('precio').value;

	productos.push(new IngrProducto(codigo,nombre,precio));

}

// Funcion para mostrar los datos

function showData(){

	let rows = ""; 

	for(let	index = 0; index < productos.length; index++){

		rows += '<tr>'
		rows += '<td>' + productos[index].codigo + '</td>'
		rows += '<td>' + productos[index].nombre + '</td>'
		rows += '<td>' + productos[index].precio + '</td>'
		rows += '</tr>'

	}	
	document.getElementById('listado').innerHTML = rows;
}

//Funcion principal

function addData( ) {
	
	// Validar campos de ingreso

	if(ValidarFields() == false){
		return;
	}

	alert(' ¡ Genial ! Producto ingresado correctamente.');

	// Poblar el arreglo

	addRecord();

	// Mostrar los datos

	showData();

	// Limpiar los campos
}

/* CONECTATO */

var form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        Swal.fire(
			'EXCELENTE',
			'Pronto me estare contactando contigo.',
			'success'
		  )
        form.reset()
      }).catch(error => {
        status.innerHTML = "Lo siento, hay un erro al enviar tus datos"
      });
    }
    form.addEventListener("submit", handleSubmit)

	
	