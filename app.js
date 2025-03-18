// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombres = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value;
    
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }
    
    nombres.push(nombre);
    actualizarLista();
    input.value = "";
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    nombres.forEach(nombre => {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (nombres.length === 0) {
        alert("No hay nombres en la lista para sortear.");
        return;
    }
    
    let indiceAleatorio = Math.floor(Math.random() * nombres.length);
    let amigoSecreto = nombres[indiceAleatorio];
    
    document.getElementById("resultado").innerHTML = `🎉 El amigo secreto es: <strong>${amigoSecreto}</strong> 🎉`;
}
