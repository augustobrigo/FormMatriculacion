window.onload = inicio;


let ciclo = document.querySelector('input[name="radio"]').value;
let modulos = document.querySelectorAll('input[name="modulos"]:checked');
let curso = document.getElementById('selectCurso').value;
let nombre = document.getElementById('nombre').value;
let horas = document.querySelectorAll("select[name=multipleselect]");
let comentario = document.getElementById("exampleFormControlTextarea1").value;

function inicio() {
    console.log("Entro en inicio ");

   

    let accion = document.getElementById("cargar");

    accion.onsubmit = function () {

        let smCiclo = document.getElementById("smCiclo");
        let smMod = document.getElementById("smModulo");
        let smCurso = document.getElementById("smCurso");
        let smNombre = document.getElementById("smNombre");
        let smHora = document.getElementById("smHoras");


        
    }
}

function obtenerDatos() {
   
    // Construyendo el mensaje con los datos recogidos
    // let mensaje = "Ciclo: " + ciclo + "\nMódulos: " + marcados + "\nCurso: " + curso + "\nNombre: " + nombre;
    let mensaje =
        "Ciclo: " +
        ciclo +
        "\nModulos: " +
        marcados +
        "\nNombre: " +
        nombre +
        "\nCurso: " +
        curso +
        "\nHoras asistidas: " +
        horasMarcadas +
        "\nComentario: " +
        comentario;

    // Muestra los datos en un alert
    alert(mensaje);
}
