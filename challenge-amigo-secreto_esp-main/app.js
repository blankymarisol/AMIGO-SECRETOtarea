// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = []; //lista para almacenar los nombres

function agregarAmigo() {
    //obtener el valor del input
    const inputAmigo = document.getElementById('amigo');
    const nombre = inputAmigo.value.trim();

    //validar que el nombre no este vacio
    if (nombre === '') {
        alert('Por favor, ingrese un nombre');
        return;
    }

    //agregar el nombre a la lista
    listaAmigos.push(nombre);

    //muestra en la consola el nombre agregado y la lista actualizada
    console.log('Nuevo amigo agregado: ', nombre);
    console.log('Lista de amigos actualizada: ', listaAmigos);

    //limpiar el input
    inputAmigo.value = '';

    //actualizar la lista en la pantalla
    actualizarListaAmigos();
}

//funcion para mostrar la lista de amigos en la pantalla
function actualizarListaAmigos() {
    const listaElemento = document.getElementById('listaAmigos');
    listaElemento.innerHTML = '';

    listaAmigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaElemento.appendChild(li);
    });
}

//agregar la funcion de escuchar la tecla Enter
document.getElementById('amigo').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        agregarAmigo();
    }
});